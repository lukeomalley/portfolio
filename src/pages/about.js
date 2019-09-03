import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/Title';
import Header from '../components/Header';

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <Title text={`Luke O'Malley`} />
    <Header currentPage={'about'} />
  </Layout>
);

export default IndexPage;
