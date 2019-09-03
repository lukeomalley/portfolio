import React from 'react';
import styled from 'styled-components';

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: 0.3s;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Project = ({ project }) => {
  return (
    <ProjectWrapper>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </ProjectWrapper>
  );
};

export default Project;
