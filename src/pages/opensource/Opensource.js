import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PubDevPackages from "../../containers/pubDevPackages/PubDevPackages";
import OpenSourceProjects from "../../components/openSourceProjects/OpenSourceProjects";
import OpenSourceProjectsData from "../../shared/opensource/opensourceProjects.json";
// import PullRequests from "../../containers/pullRequests/PullRequests";
// import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { openSourceHeader } from "../../portfolio.js";
import AnimatedBackground from "../../components/animatedBackground/AnimatedBackground";
import "./Opensource.css";

class Opensource extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="opensource-main anim-bg-host">
        <AnimatedBackground variant="opensource" theme={theme} />
        <Header theme={theme} />

        <Fade bottom duration={2000} distance="20px">
          <div className="opensource-intro-div">
            <h1
              className="opensource-intro-title"
              style={{ color: theme.text }}
            >
              {openSourceHeader.title}
            </h1>
            <p
              className="opensource-intro-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {openSourceHeader.description}
            </p>
          </div>
        </Fade>

        <PubDevPackages theme={theme} />

        <OpenSourceProjects
          projectsData={OpenSourceProjectsData}
          theme={theme}
        />

        <Organizations theme={theme} />

        {/* <OpensourceCharts theme={this.props.theme} />
        <PullRequests theme={this.props.theme} />
        <Issues theme={this.props.theme} />*/}
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Opensource;
