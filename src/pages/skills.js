import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/Title';
import Header from '../components/Header';

const IndexPage = () => (
  <Layout>
    <SEO title="Skills" />
    <Title text={`Luke O'Malley`} />
    <Header currentPage={'skills'} />
    <h1>Skills Page</h1>
  </Layout>
);

export default IndexPage;
