import React from 'react';
import { Row, Column, Icon, Heading, Layout } from '#components/common';

const MovieHuntApp = () => (
  <Layout>
    <Row>
      <Column m={6}>
        <Heading>Top rated movies</Heading>
      </Column>
      <Column m={6} className="text-right">
        <Icon icon="search" />
      </Column>
    </Row>
  </Layout>
);

export default MovieHuntApp;
