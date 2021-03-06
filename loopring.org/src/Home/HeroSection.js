import React from "react";

import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import englishTranslation from "./i18n/HeroSection.en.json";
import chineseTranslation from "./i18n/HeroSection.zh.json";
import I18nComponent from "../Components/I18nComponent";

import "./HeroSection.scss";

class HeroSection extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    const title = this.isChinese() ? "路印协议" : "Loopring";
    const titleClass = this.isChinese() ? "chinese" : "";
    const subTitle = this.isChinese()
      ? "零知卷叠交易与支付协议"
      : "zkRollup Exchange and Payment Protocol";

    return (
      <section
        className={
          "section section-about-hero is-large has-background-primary-white " +
          titleClass
        }
      >
        <div className="container">
          <div className="columns is-centered is-vcentered">
            <div
              data-aos="fade-up"
              className="column is-centered is-vcentered has-text-centered"
            >
              <div className="title">{title}</div>

              <div className="subtitle">{subTitle}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withLocalize(HeroSection);
