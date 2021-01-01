import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostFeed from '../components/PostFeed';

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              date(formatString: "DD-MM-YYYY")
              description
              title
            }
            timeToRead
            fields {
              slug
            }
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
