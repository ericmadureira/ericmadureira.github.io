import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
  return <Img fixed={avatarImage.childImageSharp.fixed} />
};

export default Avatar;
