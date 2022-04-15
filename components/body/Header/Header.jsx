import { useState } from "react";
import { useRouter } from "next/router";
import stylesIndex from "../../../styles/HeaderIndex.module.css";
import stylesOther from "../../../styles/HeaderOther.module.css";
import Link from "next/link";
import NavbarHome from "../Navbar/NavbarHome";
import NavbarBlog from "../Navbar/NavbarBlog";
import ButtonMenu from "../Menu/Menu";
import stylesNavResp from "../../../styles/NavbarResponsive.module.css";
import NavbarResponsive from "../Responsive/Navbar/NavbarResponsive";
import TranslateButton from "../TranslateButton/TranslateButton";

const Header = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const router = useRouter();

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <>
      <header className={stylesIndex.header}>
        <div className={stylesIndex.logoPersonal}>
          {router.pathname === "/" ? (
            <Link href="/">
              <a className={stylesIndex.colorLogo}>
                <h1>JC Developer</h1>
              </a>
            </Link>
          ) : (
            <Link href="/">
              <a className={stylesOther.colorLogo}>
                <h1>JC Developer</h1>
              </a>
            </Link>
          )}
        </div>
        <div className={stylesIndex.contentButtonLanguage}>
          <nav className={stylesIndex.nav}>
            {router.pathname === "/" ? (
              <ul className={stylesIndex.list}>
                <NavbarHome />
              </ul>
            ) : (
              <ul className={stylesIndex.list}>
                <NavbarBlog />
              </ul>
            )}
          </nav>
          <TranslateButton />
        </div>
        <ButtonMenu onClick={handleToggleSidebar} />
      </header>

      {toggleSidebar ? (
        <nav className={stylesNavResp.sidebar}>
          <NavbarResponsive
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
          />
        </nav>
      ) : null}
    </>
  );
};

export default Header;
