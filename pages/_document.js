// In _document.js
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
    <Head/>       
         
          <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet"  />

           <link rel="stylesheet" href="/css/open-iconic-bootstrap.min.css" />
          <link rel="stylesheet" href="/css/animate.css"  />

          <link rel="stylesheet" href="/css/owl.carousel.min.css"  />
          <link rel="stylesheet" href="/css/owl.theme.default.min.css"  />
          <link rel="stylesheet" href="/css/magnific-popup.css"  />

          <link rel="stylesheet" href="/css/aos.css"  />

          <link rel="stylesheet" href="/css/ionicons.min.css"  />

          <link rel="stylesheet" href="/css/flaticon.css"  />
          <link rel="stylesheet" href="/css/icomoon.css"  />
          <link rel="stylesheet" href="/css/style.css"  /> 
   
      <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <Main />
        <NextScript />      
        {/* <Script src="/static/js/jquery.min.js" 
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
        strategy="afterInteractive"></Script>  */}
        
      </body>
    </Html>
  )
}