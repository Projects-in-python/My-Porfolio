import React, { useEffect, useState } from "react";
import "./OpenSourceProjects.css";
import OpenSourceProjectCard from "../openSourceProjectCard/OpenSourceProjectCard";
import { Fade } from "react-reveal";

const GITHUB_API = "https://api.github.com/repos";

// "https://github.com/Code-Making/24Ryde-User-App" -> "Code-Making/24Ryde-User-App"
function repoSlug(url) {
  if (!url) return null;
  const match = url.match(/github\.com\/([^/]+\/[^/?#]+)/);
  return match ? match[1].replace(/\.git$/, "") : null;
}

export default function OpenSourceProjects({ projectsData, theme }) {
  // Keyed by project id. Only populated for projects whose GitHub repo
  // responds; anything else simply renders without the live stat row.
  const [repoStats, setRepoStats] = useState({});

  const projects =
    projectsData && projectsData.data ? projectsData.data : undefined;

  useEffect(() => {
    if (!projects) return;
    let cancelled = false;

    projects.forEach((project) => {
      const slug = repoSlug(project.github);
      if (!slug) return;

      fetch(`${GITHUB_API}/${slug}`)
        .then((res) => {
          if (!res.ok) throw new Error(`GitHub returned ${res.status}`);
          return res.json();
        })
        .then((repo) => {
          if (cancelled) return;
          setRepoStats((prev) => ({
            ...prev,
            [project.id]: {
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              watchers: repo.subscribers_count,
              language: repo.language,
              updatedAt: repo.pushed_at,
              license: repo.license ? repo.license.spdx_id : null,
            },
          }));
        })
        .catch(() => {
          // Leave this project without live stats — the card handles it.
        });
    });

    return () => {
      cancelled = true;
    };
  }, [projects]);

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <div className="os-projects-main-div">
      <div className="os-projects-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="os-projects-header" style={{ color: theme.text }}>
            Open Source Projects
          </h1>
        </Fade>
      </div>
      <div className="os-projects-grid">
        {projects.map((project) => (
          <OpenSourceProjectCard
            key={project.id}
            project={project}
            stats={repoStats[project.id]}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}
