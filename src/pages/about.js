import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/Title';
import Header from '../components/Header';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Title text={`Luke O'Malley`} />
    <Header currentPage={'about'} />
    <h1>About</h1>
  </Layout>
);

export default AboutPage;
