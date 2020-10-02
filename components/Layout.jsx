import React from 'react';
import Head from 'next/head';
import Header from './Header';
import { useRouter } from 'next/router';
import Footer from './Footer';

const Layout = ({ children }) => {

    const router = useRouter();

    const title = (string) => {
        let newTitle = clean(string);
        newTitle = uppercase(newTitle);
        return newTitle;
    };

    const uppercase = (string) => {
        const newString = string.toUpperCase();
        return newString;
    };

    const clean = (string) => {
        let newString = string.replace(/-/g, ' ');
        newString = newString.replace(/\//g, '');
        return newString;
    };

    return (
        <>
            <Head>
                <title>
                    {router.pathname === '/' ? (
                        'Jesús Casañas Developer | Sitio Web Oficial'
                    ) : (
                            title(router.pathname) + ' | Jesús Casañas Developer'
                        )}
                </title>

                <meta name="description" content="" />
            </Head>

            {router.pathname === '/' ? (
                <main>
                    {children}
                </main>

            ) : (
                    <>
                        <Header />
                        <main>
                            {children}
                        </main>
                        <Footer />
                    </>
                )
            }
        </>
    );
};

export default Layout;