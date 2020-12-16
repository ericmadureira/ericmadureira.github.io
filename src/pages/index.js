import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostFeed from '../components/PostFeed';

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              description
              title
            }
            timeToRead
          }
        }
      }
    }
  `)

  const { postList } = allMarkdownRemark.edges

  postList.map(({ node: { frontmatter: { date, description, title }, timeToRead}}) => date)

  return (
    <Layout>
      <SEO title='Home' />
      <PostFeed />
    </Layout>
  )
}

export default IndexPage;
