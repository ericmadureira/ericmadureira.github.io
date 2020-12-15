import React from 'react'

import Avatar from '../Avatar'
import SocialLinks from '../SocialLinks'

import * as S from './styled'

const Profile = () => (
  <S.ProfileWrapper>
    <Avatar />
    <S.DescriptionWrapper>
      <S.Description>Personal blog by Eric Madureira.</S.Description>
      <S.Description>I talk about front-end development and career building.</S.Description>
      <S.Description>
        <SocialLinks />
      </S.Description>
    </S.DescriptionWrapper>
  </S.ProfileWrapper>
)

export default Profile