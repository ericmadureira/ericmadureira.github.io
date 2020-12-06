import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => (
  <Layout>
    <h1>About Eric Madureira</h1>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  </Layout>
);

export default AboutPage;