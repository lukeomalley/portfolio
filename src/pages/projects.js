import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/Title';
import Header from '../components/Header';
import Project from '../components/Project';
import Projects from '../constants/projects';

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Title text={`Luke O'Malley`} />
    <Header currentPage={'projects'} />
    <ProjectsWrapper>
      {Projects.map(project => (
        <Project project={project} />
      ))}
    </ProjectsWrapper>
  </Layout>
);

export default ProjectsPage;
