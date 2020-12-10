import React from 'react'

import Avatar from '../Avatar'
import * as S from './styled'

const Profile = () => (
  <S.ProfileWrapper>
    <Avatar />
    <S.DescriptionWrapper>
      <S.Description>Front-end developer.</S.Description>
      <S.Description>Talking about software development and career building.</S.Description>
    </S.DescriptionWrapper>
  </S.ProfileWrapper>
)

export default Profile