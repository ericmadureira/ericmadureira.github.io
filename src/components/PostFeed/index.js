import React, { useMemo } from 'react'

import * as S from './styled'

const PostFeed = ({ list }) => {
  const mappedPosts = useMemo(() => (
    list.map(({ node: { frontmatter: { date, description, title }, timeToRead }}) => (
      <S.PostLinkWrapper
        href={'#'}
        title={title}
        target='_blank'
        rel='noopener noreferer'
      >
        <S.PostItem>
          <S.PostTitle>{title}</S.PostTitle>
          <S.PostDate>{date}</S.PostDate>
          <S.PostDescription>{description}</S.PostDescription>
        </S.PostItem>
      </S.PostLinkWrapper>
    ))
  ), [list])

  return (
    <S.PostFeedWrapper>
      {mappedPosts}
    </S.PostFeedWrapper>
  )
}

export default PostFeed
