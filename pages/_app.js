import '../styles/globals.css'
import {Fragment} from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return <Fragment>
          <Head>
           <title>YYK Portfolio</title>
           <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            <meta name="description" content="Yin Yin Kyi Portfolio"/>
            <meta name="author" content="Yin Yin Kyi"/>
          
          </Head>
          <Layout>
          <Component {...pageProps} />   
          </Layout> 
                
          <Script src="js/jquery.min.js" 
          strategy="beforeInteractive"></Script>
          <Script  src="js/bootstrap.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="js/jquery.easing.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="js/scripts.js"
          strategy="beforeInteractive"></Script>          
        </Fragment>
}

export default MyApp
