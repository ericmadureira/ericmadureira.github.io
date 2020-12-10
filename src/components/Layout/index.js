import React from "react";
import PropTypes from "prop-types";

import GlobalStyles from '../../styles/global'
import Profile from '../Profile';
import Header from '../Header';
import * as S from './styled';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Header />
      <Profile />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
