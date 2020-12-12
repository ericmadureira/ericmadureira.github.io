import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostFeed from '../components/PostFeed';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <PostFeed />
  </Layout>
);

export default IndexPage;
