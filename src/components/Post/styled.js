import React from 'react'
import styled from 'styled-components'

export const PostHeader = styled.header`
  color: #4AB2EE;
  margin-top: 1rem;
  max-width: 42rem;
`

export const PostTitle = styled.h1`
  font-family: Montserrat,sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const PostDescription = styled.h2`
  font-size: 1rem;
  font-weight: 200;
`

export const PostContent = styled.section`
  max-width: 42rem;
  padding: 2rem 0;
  p {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`