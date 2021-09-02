import Layout from '../components/body/Layout/Layout';
import Lobby from '../components/body/Lobby/Lobby';
import SobreMiAcademico from '../components/body/SobreMi/Academico/Academico';
import SobreMiLaboral from '../components/body/SobreMi/Laboral/Laboral';
import Stack from '../components/body/Stack/Stack';
import Contacto from '../components/body/Contacto/Contacto';

export default function Home() {
  return (
    <div>
      <Layout>
        <Lobby />
        <SobreMiAcademico />
        <SobreMiLaboral />
        <Stack />
        <Contacto />
      </Layout>
    </div>
  );
};

