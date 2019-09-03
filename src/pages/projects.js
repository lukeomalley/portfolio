import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/Title';
import Header from '../components/Header';
import Project from '../components/Project';
import Projects from '../constants/projects';

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Title text={`Luke O'Malley`} />
    <Header currentPage={'projects'} />
    {Projects.map(project => (
      <Project project={project} />
    ))}
  </Layout>
);

export default ProjectsPage;
