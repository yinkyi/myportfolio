// In _document.js
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
    <Head/>       
         
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@600&display=swap" rel="stylesheet"/>
        <link href="css/bootstrap.css" rel="stylesheet"/>
        <link href="css/fontawesome-all.css" rel="stylesheet"/>
        <link href="css/styles.css" rel="stylesheet"/>
        <link rel="icon" href="images/favicon.png"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      <body data-spy="scroll" data-target=".fixed-top">
        <Script src="js/jquery.min.js" 
        strategy="beforeInteractive"></Script>
        <Script  src="js/bootstrap.min.js"
        strategy="beforeInteractive"></Script>
        <Script  src="js/jquery.easing.min.js"
        strategy="beforeInteractive"></Script>
        <Script  src="js/scripts.js"
        strategy="beforeInteractive"></Script>
        <Main />       
        <NextScript />  
        
      </body>
    </Html>
  )
}