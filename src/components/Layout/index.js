import React from "react";
import PropTypes from "prop-types";

import GlobalStyles from '../../styles/global'
import Profile from '../Profile';
import * as S from './styled';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Profile />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
