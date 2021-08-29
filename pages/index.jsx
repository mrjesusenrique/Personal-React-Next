import React from 'react';
import Layout from '../components/body/Layout/Layout';
import Lobby from '../components/body/Lobby/Lobby';
import SobreMi from '../components/body/SobreMi/SobreMi';
import Contacto from '../components/body/Contacto/Contacto';

export default function Home() {
  return (
    <div>
      <Layout>
        <Lobby />
        <SobreMi />
        <Contacto />
      </Layout>
    </div>
  );
};

