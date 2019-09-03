import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/Title';
import Header from '../components/Header';

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <Title text={`Luke O'Malley`} />
    <Header currentPage={'resume'} />
    <h1>Resume Page</h1>
  </Layout>
);

export default ResumePage;
