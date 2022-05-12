// import '../styles/globals.css'
import {Fragment} from 'react'
import Head from 'next/head'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
  return <Fragment>
          <Head>
           <title>YYK Portfolio</title>
           <meta charSet="utf-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />      
          </Head> 
          <Script src="/static/js/jquery.min.js" 
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/jquery-migrate-3.0.1.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/popper.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/bootstrap.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/jquery.easing.1.3.js"
          strategy="beforeInteractive"></Script>
          <Script src="/static/js/jquery.waypoints.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/jquery.stellar.min.js"
          strategy="beforeInteractive"></Script>
          <Script src="/static/js/owl.carousel.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/jquery.magnific-popup.min.js"
          strategy="beforeInteractive"></Script>        
          <Script   src="/static/js/aos.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/jquery.animateNumber.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/scrollax.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/main.js"
          strategy="afterInteractive"></Script>         
          <Component {...pageProps} />
        </Fragment>
}

export default MyApp
