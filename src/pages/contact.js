import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/Title';
import Header from '../components/Header';

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Title text={`Luke O'Malley`} />
    <Header currentPage={'contact'} />
  </Layout>
);

export default IndexPage;
