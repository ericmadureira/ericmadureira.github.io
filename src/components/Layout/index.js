import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

import Profile from '../Profile';
import GlobalStyles from '../../styles/global'

const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const LayoutMain = styled.main`
  background-color: #e8e8e8;
  min-width: 100vh;
  padding: 0 20rem;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Profile />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
