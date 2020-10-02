import React from 'react';
import Head from 'next/head';
import Header from './Header';
import { useRouter } from 'next/router';

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

                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
            </Head>

            {router.pathname === '/' ? (
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