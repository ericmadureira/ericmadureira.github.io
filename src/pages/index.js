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

  const rawPostList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title='Home' />
      <PostFeed list={rawPostList} />
    </Layout>
  )
}

export default IndexPage;
