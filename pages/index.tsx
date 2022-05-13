import {NextPage} from 'next';
import Head from 'next/head';
import React from 'react';
import Hero from '../components/pages/home/hero/Hero';
import ProjectComponent from '../components/pages/home/project/ProjectComponent';
import Tools from '../components/pages/home/tools/Tools';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Mhmmdvg</title>
            </Head>
            <Hero/>
            <ProjectComponent/>
            <Tools/>
        </>
    );
};

export default Home;

// export async function getStaticProps() {
//     const posts = getAllPost();
//
//     return { props: {} };
// }
