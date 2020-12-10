import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpg" }){
          childImageSharp {
            fixed(height: 90, width: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
};

export default Avatar;
