import Head from 'next/head';

import 'styles/globals.css';
import { Nav, RouteGuard } from 'components';

export default App;

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Next.js 15 - Basic HTTP Authentication</title>

                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            </Head>

            <div className="app-container bg-light">
                <Nav />
                <div className="container pt-4 pb-4">
                    <RouteGuard>
                        <Component {...pageProps} />
                    </RouteGuard>
                </div>
            </div>

            {/* Section Bottom */}
            <div className="text-center mt-4">
                <p>
                
                </p>
               
            </div>
        </>
    );
}
