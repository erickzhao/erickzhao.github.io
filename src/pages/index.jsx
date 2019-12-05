import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <div className="home-container">
          <Helmet title={`Home | ${config.siteTitle}`} />
          <h1>Erick Zhao - Software Engineer</h1>
        </div>
      </Layout>
    );
  }
}

export default HomePage;
