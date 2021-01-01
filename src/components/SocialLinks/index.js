import React, { useMemo } from 'react'

import Icons from './icons'
import { links } from './content'

import * as S from './styled'

const SocialLinks = () => {
  const socialLinks = useMemo(() => (
    links.map((link, index) => {
      const { iconKey, label, url } = link
      const Icon = Icons[iconKey]

      return (
        <S.SocialLinksItem key={index}>
          <S.SocialLinksLink
            href={url}
            title={label}
            target='_blank'
            rel='noopener noreferer'
          >
            <S.IconWrapper>
              <Icon />
            </S.IconWrapper>
          </S.SocialLinksLink>
        </S.SocialLinksItem>
      )
    })
  ), [])

  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        {socialLinks}
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  )
}

export default SocialLinks
