import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <S.PostHeader>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{`${post.frontmatter.date} • ${post.timeToRead} min read`}</S.PostDescription>
      </S.PostHeader>
      <S.PostContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.PostContent>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug }}) {
      frontmatter {
        title
        date(formatString: "DD-MM-YYYY")
      }
      html
      timeToRead
    }
  }
`

export default BlogPost