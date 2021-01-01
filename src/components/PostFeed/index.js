import React, { useMemo } from 'react'

import * as S from './styled'

const PostFeed = ({ list }) => {
  const sortedPosts = useMemo(() => (
    list.map(({ node: { frontmatter: { date, description, title }, timeToRead, fields: { slug } }}) => (
      <S.PostLinkWrapper
        href={slug}
        title={title}
        target='_blank'
        rel='noopener noreferer'
      >
        <S.PostItem>
          <S.PostTitle>{title}</S.PostTitle>
          <S.PostDate>{`${date} • ${timeToRead} min read`}</S.PostDate>
          <S.PostDescription>{description}</S.PostDescription>
        </S.PostItem>
      </S.PostLinkWrapper>
    ))
  ), [list])

  return (
    <S.PostFeedWrapper>
      {sortedPosts}
    </S.PostFeedWrapper>
  )
}

export default PostFeed
