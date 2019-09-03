import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;
  justify-content: center;
  font-size: 1.15rem;

  a {
    text-decoration: none;
    color: var(--mainBlack);
  }

  .currentPage {
    border-bottom: 1px solid black;
  }
`;

const Header = ({ currentPage }) => {
  return (
    <HeaderWrapper>
      <Link
        to="about"
        className={currentPage === 'about' ? 'currentPage' : null}
      >
        about
      </Link>
      <Link
        to="projects"
        className={currentPage === 'projects' ? 'currentPage' : null}
      >
        projects
      </Link>
      <Link
        to="skills"
        className={currentPage === 'skills' ? 'currentPage' : null}
      >
        skills
      </Link>
      <Link
        to="resume"
        className={currentPage === 'resume' ? 'currentPage' : null}
      >
        resume
      </Link>
      <Link
        to="contact"
        className={currentPage === 'contact' ? 'currentPage' : null}
      >
        contact
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
