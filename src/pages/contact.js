import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/Title';
import Header from '../components/Header';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Title text={`Luke O'Malley`} />
    <Header currentPage={'contact'} />
    <h1>Contact Page</h1>
  </Layout>
);

export default ContactPage;
