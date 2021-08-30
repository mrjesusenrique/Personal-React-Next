import stylesIndex from '../../../styles/HeaderIndex.module.css';
import stylesOther from '../../../styles/HeaderOther.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavbarHome from '../Navbar/NavbarHome';
import NavbarBlog from '../Navbar/NavbarBlog';
import NavbarResponsive from '../Responsive/Navbar/NavbarResponsive';

const Header = () => {

    const router = useRouter();

    return (
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
            <nav className={stylesIndex.nav}>

                {router.pathname === '/' ? (

                    <ul className={stylesIndex.list}>
                        <NavbarHome />
                    </ul>

                ) : (

                    <ul className={stylesIndex.list}>
                        <NavbarBlog />
                    </ul>
                )
                }
            </nav>

            <NavbarResponsive />
        </header>
    );
};

export default Header;

