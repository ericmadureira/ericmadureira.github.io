import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

import Profile from '../Profile';

const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const LayoutMain = styled.main`
  min-width: 100vh;
  padding: 0 20rem;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Profile />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
