import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
// import BlogsImg from "./BlogsImg";
// import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";
import myResumePdf from "../../assets/docs/Uttam_Singh_Resume.pdf";
import AnimatedBackground from "../../components/animatedBackground/AnimatedBackground";

const ContactData = contactPageData.contactSection;
const contactMethods = contactPageData.contactMethods;
const availability = contactPageData.availability;
// const blogSection = contactPageData.blogSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main anim-bg-host">
        <AnimatedBackground variant="contact" theme={theme} />
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt="Uttam Singh"
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="contact-cta-div">
                  <Button
                    text="See My Resume"
                    href="/resume"
                    theme={theme}
                    className="contact-cta-btn"
                  />
                  <Button
                    text="📃 Download Resume"
                    href={myResumePdf}
                    download="Uttam_Singh_Resume.pdf"
                    newTab={true}
                    theme={theme}
                    className="contact-cta-btn"
                  />
                </div>
              </div>
            </div>
          </Fade>

          {availability && (
            <Fade bottom duration={1000} distance="40px">
              <div
                className="availability-div"
                style={{
                  backgroundColor: theme.imageHighlight + "15",
                  border: `1px solid ${theme.imageHighlight}40`,
                }}
              >
                <div className="availability-status">
                  <span
                    className={
                      availability.isAvailable
                        ? "availability-dot availability-dot-pulse"
                        : "availability-dot"
                    }
                    style={{
                      backgroundColor: availability.isAvailable
                        ? "#2ECC71"
                        : "#E74C3C",
                    }}
                  />
                  <span
                    className="availability-status-text"
                    style={{ color: theme.text }}
                  >
                    {availability.status}
                  </span>
                </div>
                <div className="availability-details">
                  {availability.details.map((detail, i) => (
                    <div key={i} className="availability-detail">
                      <div
                        className="availability-detail-label"
                        style={{ color: theme.secondaryText }}
                      >
                        {detail.label}
                      </div>
                      <div
                        className="availability-detail-value"
                        style={{ color: theme.text }}
                      >
                        {detail.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          )}

          {contactMethods && contactMethods.length > 0 && (
            <div className="contact-methods-section">
              <Fade bottom duration={1000} distance="20px">
                <h2
                  className="contact-methods-heading"
                  style={{ color: theme.text }}
                >
                  Get In Touch
                </h2>
                <p
                  className="contact-methods-subtitle subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Pick whichever channel suits you — every card below is a
                  direct link.
                </p>
              </Fade>
              <div className="contact-methods-grid">
                {contactMethods.map((method) => {
                  const accent =
                    theme.isDark && method.darkColor
                      ? method.darkColor
                      : method.color;
                  return (
                    <Fade
                      bottom
                      duration={1000}
                      distance="40px"
                      key={method.id}
                    >
                      <a
                        className="contact-method-card"
                        href={method.link}
                        target={method.newTab ? "_blank" : undefined}
                        rel={method.newTab ? "noopener noreferrer" : undefined}
                        style={{
                          backgroundColor: theme.imageHighlight + "15",
                          border: `1px solid ${theme.imageHighlight}40`,
                        }}
                      >
                        <div
                          className="contact-method-icon-div"
                          style={{ backgroundColor: accent + "1F" }}
                        >
                          <span
                            className="iconify contact-method-icon"
                            data-icon={method.iconifyClassname}
                            data-inline="false"
                            style={{ color: accent }}
                          />
                        </div>
                        <h3
                          className="contact-method-title"
                          style={{ color: theme.text }}
                        >
                          {method.title}
                        </h3>
                        <div
                          className="contact-method-value"
                          style={{ color: theme.text }}
                        >
                          {method.value}
                        </div>
                        <p
                          className="contact-method-subtitle"
                          style={{ color: theme.secondaryText }}
                        >
                          {method.subtitle}
                        </p>
                        <span
                          className="contact-method-cta"
                          style={{ color: theme.imageHighlight }}
                        >
                          {method.cta} →
                        </span>
                      </a>
                    </Fade>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
