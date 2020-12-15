import React, { useMemo } from 'react'

import * as S from './styled'

const posts = [
  { date: 'December 14, 2020', title: 'Post Title', subtitle: 'Post subtitle here' },
  { date: 'December 14, 2020', title: 'Post Title', subtitle: 'Post subtitle here' },
  { date: 'December 14, 2020', title: 'Post Title', subtitle: 'Post subtitle here' }
]

const PostFeed = () => {
  const mappedPosts = useMemo(() => (
    posts.map(({ date, subtitle, title }) => (
      <S.PostLinkWrapper>
        <S.PostItem>
          <S.PostTitle>{title}</S.PostTitle>
          <S.PostDate>{date}</S.PostDate>
          <S.PostSubtitle>{subtitle}</S.PostSubtitle>
        </S.PostItem>
      </S.PostLinkWrapper>
    ))
  ), [])

  return (
    <S.PostFeedWrapper>
      {mappedPosts}
    </S.PostFeedWrapper>
  )
}

export default PostFeed
