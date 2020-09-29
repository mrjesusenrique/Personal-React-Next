import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Jesús Casañas Developer | Sitio Web Oficial</title>
            </Head>

            <>
                <Header />
            </>
            {children}
        </>
    );
};

export default Layout;