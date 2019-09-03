import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const All_IMAGES_QUERY = graphql`
  {
    allImageSharp {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`;

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  justify-content: center;
  text-align: center;
  padding: 1rem;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .links {
    display: grid;
    grid-template-columns: auto auto;
  }

  .links a {
    text-decoration: none;
    color: var(--mainBlack);
    font-size: 20px;
  }

  .links a:hover {
    color: purple;
  }

  .technologies {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  .tech {
    display: grid;
    grid-template-columns: auto auto;
    align-content: center;
    justify-content: center;
    grid-gap: 0.5rem;
  }

  .gatsby-image-wrapper {
    width: 25px;
    border-radius: 50%;
  }
`;

const Project = ({ project }) => {
  const data = useStaticQuery(All_IMAGES_QUERY);
  const {
    allImageSharp: { edges: images },
  } = data;
  console.log(images);

  return (
    <ProjectWrapper>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div className="technologies">
        {project.technologies.map((technology, index) => (
          <div className="tech">
            <Image fluid={images[index].node.fluid}></Image>
            <p>{technology.name}</p>
          </div>
        ))}
      </div>
      <div className="links">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a href={project.site} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt />
        </a>
      </div>
    </ProjectWrapper>
  );
};

export default Project;
