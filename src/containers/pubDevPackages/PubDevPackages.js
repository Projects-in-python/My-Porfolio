import React, { useEffect, useState } from "react";
import "./PubDevPackages.css";
import { Fade } from "react-reveal";
import PubDevPackageCard from "../../components/pubDevPackageCard/PubDevPackageCard";
import { pubDevPackages } from "../../portfolio";

const PUB_DEV_API = "https://pub.dev/api/packages";

// Fetches the live version and score for one package. Resolves to null when
// pub.dev is unreachable so the caller can fall back to the bundled stats.
async function fetchPackageStats(name) {
  const [info, score] = await Promise.all([
    fetch(`${PUB_DEV_API}/${name}`).then((res) => {
      if (!res.ok) throw new Error(`pub.dev returned ${res.status}`);
      return res.json();
    }),
    fetch(`${PUB_DEV_API}/${name}/score`).then((res) => {
      if (!res.ok) throw new Error(`pub.dev returned ${res.status}`);
      return res.json();
    }),
  ]);

  return {
    version: info.latest.version,
    published: info.latest.published,
    likeCount: score.likeCount,
    grantedPoints: score.grantedPoints,
    maxPoints: score.maxPoints,
    downloadCount30Days: score.downloadCount30Days,
  };
}

export default function PubDevPackages({ theme }) {
  const packages = pubDevPackages.packages;

  // Keyed by package name: { stats, isLive }. Seeded with the bundled
  // fallbacks so the section renders immediately, then upgraded once the
  // live pub.dev response lands.
  const [liveStats, setLiveStats] = useState(() =>
    packages.reduce((acc, pkg) => {
      acc[pkg.name] = { stats: pkg.fallback, isLive: false };
      return acc;
    }, {})
  );

  useEffect(() => {
    let cancelled = false;

    packages.forEach((pkg) => {
      fetchPackageStats(pkg.name)
        .then((stats) => {
          if (cancelled || !stats) return;
          setLiveStats((prev) => ({
            ...prev,
            [pkg.name]: { stats, isLive: true },
          }));
        })
        .catch(() => {
          // Keep the bundled fallback stats already in state.
        });
    });

    return () => {
      cancelled = true;
    };
    // `packages` comes from static config and never changes at runtime.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!packages || packages.length === 0) {
    return null;
  }

  return (
    <div className="pub-packages-main-div" id="packages">
      <Fade bottom duration={2000} distance="20px">
        <div className="pub-packages-header-div">
          <h1 className="pub-packages-header" style={{ color: theme.text }}>
            {pubDevPackages.title}
          </h1>
          <p
            className="pub-packages-subtitle subTitle"
            style={{ color: theme.secondaryText }}
          >
            {pubDevPackages.subtitle}
          </p>
        </div>
      </Fade>

      <div
        className={
          packages.length === 1
            ? "pub-packages-grid pub-packages-grid-single"
            : "pub-packages-grid"
        }
      >
        {packages.map((pkg) => {
          const entry = liveStats[pkg.name];
          return (
            <PubDevPackageCard
              key={pkg.name}
              pkg={pkg}
              stats={entry.stats}
              isLive={entry.isLive}
              theme={theme}
            />
          );
        })}
      </div>
    </div>
  );
}
