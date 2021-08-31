import Layout from '../components/body/Layout/Layout';
import Lobby from '../components/body/Lobby/Lobby';
import SobreMiAcademico from '../components/body/SobreMi/Academico/Academico';
import SobreMiLaboral from '../components/body/SobreMi/Laboral/Laboral';
import Habilidades from '../components/body/Habilidades/Habilidades';
import Contacto from '../components/body/Contacto/Contacto';

export default function Home() {
  return (
    <div>
      <Layout>
        <Lobby />
        <SobreMiAcademico />
        <SobreMiLaboral />
        <Habilidades />
        <Contacto />
      </Layout>
    </div>
  );
};

