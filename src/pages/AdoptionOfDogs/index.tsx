import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import Layout from '../../components/Layout';
import userTestToken from '../../credentials';

interface IAngels {
  id: string;
  caption: string;
  // eslint-disable-next-line camelcase
  media_url: string;
}

const Adopted: React.FC = () => {
  return (
    <Layout>
      <h1>AdoptionOfDogs</h1>
    </Layout>
  );
};

export default Adopted;
