import React from 'react';
import Layout from '../components/body/Layout/Layout';
import Lobby from '../components/body/Lobby/Lobby';
import SobreMiAcademico from '../components/body/SobreMi/Academico/Academico';
import Contacto from '../components/body/Contacto/Contacto';

export default function Home() {
  return (
    <div>
      <Layout>
        <Lobby />
        <SobreMiAcademico />
        <Contacto />
      </Layout>
    </div>
  );
};

