import React from 'react';
import Head from 'next/head';
import Header from './Header';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {

    const router = useRouter();

    return (
        <>
            <Head>
                <title>Jesús Casañas Developer | Sitio Web Oficial</title>
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
            </Head>

            {router.pathname === "/" ? (
                <main>
                    {children}
                </main>
            ) : (
                    <main>
                        <Header />
                        {children}
                    </main>
                )
            }


        </>
    );
};

export default Layout;