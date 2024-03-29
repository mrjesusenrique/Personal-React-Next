import Layout from "../components/body/Layout/Layout";
import Lobby from "../components/body/Lobby/Lobby";
import SobreMiAcademico from "../components/body/SobreMi/Academico/Academico";
import SobreMiLaboral from "../components/body/SobreMi/Laboral/Laboral";
import Skills from "../components/body/Skills/Skills";
import Portfolio from "../components/body/Portfolio";
import Stack from "../components/body/Stack/Stack";
import Contacto from "../components/body/Contacto/Contacto";
import ScrollTop from "../components/body/ScrollTop/ScrollTop";

export default function Home() {
  return (
    <Layout>
      <Lobby />
      <SobreMiAcademico />
      <SobreMiLaboral />
      <Skills />
      <Portfolio />
      <Stack />
      <Contacto />
      <ScrollTop />
    </Layout>
  );
}
