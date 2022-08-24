import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useRef, useState,useReducer } from 'react'
import axios from 'axios'
import classes from './index.module.css'
const isNotEmpty = value => value.trim() !=='';
const isEmailValidate = value => value.trim() !=='' && value.includes('@');

const initial_value = {
  name:true,
  email:true,
  subject:true,
  message:true
}
const validateReducer = (state,actions)=>{
      if(actions.type=="valid"){
        return actions.value;
      }
      return initial_value
}

export default function Home() {  
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [bodyMessage,setBodyMessage] = useState('');
  const [validityState,dispatchValidity] = useReducer(validateReducer,initial_value);

  const sendEmail= async(e)=>{
    e.preventDefault();   
    const enterNameValid= isNotEmpty(name);
    const enterEmailValid= isEmailValidate(email);
    const enterSubjectValid= isNotEmpty(subject);
    const enterMessageValid= isNotEmpty(bodyMessage);

    dispatchValidity({"type":"valid",value:{
        name:enterNameValid,
        email:enterEmailValid,
        subject:enterSubjectValid,
        message:enterMessageValid
    }});
    const formvalidate= enterNameValid && enterEmailValid && enterSubjectValid && enterMessageValid;
    
    if(!formvalidate){
      return false;
    }

    axios.post('/api/email',{name,email,subject,bodyMessage})
     .then(    
     (res)=>{
      if(res.data.result === 1){
        alert(res.data.message);
        setName('');
        setEmail('');
        setSubject('');
        setBodyMessage('')
      }
       
      else
        alert("Send Fail!");
 
     } 
     ).catch(
       (e)=>console.log(e)
     )
  }
  return (
    <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">Yin Yin Kyi</a>
            <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu"></span> Menu
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav nav ml-auto">
                <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
                <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
                <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
                <li className="nav-item"><a href="#services-section" className="nav-link"><span>Services</span></a></li>
                <li className="nav-item"><a href="#skills-section" className="nav-link"><span>Skills</span></a></li>
                <li className="nav-item"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
                {/* <li className="nav-item"><a href="#blog-section" className="nav-link"><span>My Blog</span></a></li> */}
                <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
              </ul>
            </div>
          </div>
        </nav>
        <section id="home-section" className="hero">
          <div className="home-slider  owl-carousel">
            <div className="slider-item ">
              <div className="overlay"></div>
              <div className="container">
                <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                  <div className="one-third js-fullheight order-md-last img" style={{'backgroundImage':'url(images/my_1.png)'}}>
                    <div className="overlay"></div>
                  </div>
                  <div className="one-forth d-flex  align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                    <div className="text">
                      <span className="subheading">Hello!</span>
                      <h1 className="mb-4 mt-3">I&apos;m <span>Yin Yin Kyi</span></h1>
                      <h2 className="mb-4">Senior Software Developer</h2>
                      <p>
                        <a href="tel:+959979962810" className="btn btn-primary py-3 px-4">Call me</a>
                      <a href="/static/file/YIN-YIN-KYI-CV.pdf" download className="btn btn-white btn-outline-white py-3 px-4">Download CV</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slider-item">
              <div className="overlay"></div>
              <div className="container">
                <div className="row d-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                  <div className="one-third js-fullheight order-md-last img" style={{'backgroundImage':'url(/images/my_2.png)'}}>
                    <div className="overlay"></div>
                  </div>
                  <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                    <div className="text">
                      <span className="subheading">Hello!</span>
                      <h1 className="mb-4 mt-3">I&apos;m a <span>software developer</span> based in Myanmar</h1>
                      <p>
                       <a href="#" className="btn btn-primary py-3 px-4">Call me</a>
                      <a href="/static/file/YIN-YIN-KYI-CV.pdf" download className="btn btn-white btn-outline-white py-3 px-4">Download CV</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-6 col-lg-5 d-flex">
                <div className="img-about img d-flex align-items-stretch">
                  <div className="overlay"></div>
                  <div className="img d-flex align-self-stretch align-items-center" style={{'backgroundImage':'url(images/my_1.png)'}}>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
                <div className="row justify-content-start pb-3">
                  <div className="col-md-12 heading-section ftco-animate">
                    <h1 className="big">About</h1>
                    <h2 className="mb-4">About Me</h2>
                    <p>Fist of all, let me introduce myself &#9995;. Having 9 years of professional experience in the IT industry. I am decisive, goal-oriented, self-motivated, willing to work hard, and a fast learner.</p>
                    <ul className="about-info mt-4 px-md-0 px-2">
                      <li className="d-flex"><span>Name:</span> <span>Yin Yin Kyi</span></li>
                      <li className="d-flex"><span>Date of birth:</span> <span>February 07, 1990</span></li>
                      <li className="d-flex"><span>Address:</span> <span>No 10/11 13 Quarter Hlaing Township...</span></li>
                      <li className="d-flex"><span>Zip code:</span> <span>11051</span></li>
                      <li className="d-flex"><span>Email:</span> <span>yinyinkyi90@gmail.com</span></li>
                      <li className="d-flex"><span>Phone: </span> <span>+959979962810</span></li>
                    </ul>
                  </div>
                </div>
                <div className="counter-wrap ftco-animate d-flex mt-md-3">
                  <div className="text">
                    <p className="mb-4">
                      <span className="number" data-number="10">0</span>
                      <span>Project complete</span>
                    </p>
                    <p><a href="/static/file/YIN-YIN-KYI-CV.pdf" download className="btn btn-primary py-3 px-3">Download CV</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section ftco-no-pb" id="resume-section">
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-md-10 heading-section text-center ftco-animate">
                <h1 className="big big-2">Resume</h1>
                <h2 className="mb-4">Resume</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="resume-wrap ftco-animate" style={{'height':'417px'}}>
                  <span className="date">2018-present</span>
                  <h2>Senior Developer</h2>
                  <span className="position"><a href="https://baganit.com/" target={'blank'} style={{'cursor':'pointer'}}>Bagan Innovation Technology Co.,Ltd</a></span>
                  <p className="mt-4">Bagan Innovation Technology (singapore) Private Limited was founded in Singapore since 2015 with a major focus of developing innovative mobile apps and services for Myanmar users. We build consumer mobile apps and content platforms. We are specialized in Burmese language processing.</p>
                </div>
                <div className="resume-wrap ftco-animate">
                  <span className="date">2013-2015</span>
                  <h2>Senior Developer</h2>
                  <span className="position"><a href="https://www.mtg.com.mm/" target={'blank'} style={{'cursor':'pointer'}}>Myanmar Technology Gateway Co.,Ltd</a></span>
                  <p className="mt-4">MTG sell .mm domain to both local and world wide customer since 2010 as a main service. Our experienced web designers and developers will help develop your organization&apos;s digital image and digital branding. The cutting edge technology of Optimized SEO alongside the Content Management System will allow easy self and personal maintenance.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="resume-wrap ftco-animate">
                  <span className="date">2015-2018</span>
                  <h2>Software Developer</h2>
                  <span className="position"><a href="http://solidplm.com/" target={'blank'} style={{'cursor':'pointer'}}>SolidCad Technology Pte (Singapore Base)</a></span>
                  <p className="mt-4">The SolidCAD Technologies was established in 1996 to provide design and manufacturing services to the Engineering Community in Singapore and the region. Our clients include Philips Electronics, Motorola, HP and Siemens. In 2005, SolidCAD Technologies was appointed as AutodeskSystems Center to provide products and services for Autodesk Solutions.</p>
                </div>
                <div className="resume-wrap ftco-animate">
                  <span className="date">2011-2013</span>
                  <h2>Junior Developer</h2>
                  <span className="position"><a href="http://www.trustlinkmm.com/" target={'blank'} style={{'cursor':'pointer'}}>TrustLink Co.,Ltd</a></span>
                  <p className="mt-4">Trustlink has been a System and/or Solution Integration Company by delivering state projects and eGovernment projects, providing ICT and security hardware, developing systems and software, and supporting with range end-to-end solutions as total complete solutions. We have a good reputation in the financial industry for supplying World No.1 ATM/CDM to banks.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-md-6 text-center ftco-animate">
                <p><a href="/static/file/YIN-YIN-KYI-CV.pdf" download className="btn btn-primary py-4 px-5">Download CV</a></p>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section" id="services-section">
          <div className="container">
            <div className="row justify-content-center py-5 mt-5">
              <div className="col-md-12 heading-section text-center ftco-animate">
                <h1 className="big big-2">Carriers</h1>
                <h2 className="mb-4">Carriers</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 text-center d-flex ftco-animate">
                <a href="#" className="services-1">
                  <span className="icon">
                    <i className="flaticon-analysis"></i>
                  </span>
                  <div className="desc">
                    <h3 className="mb-5">FrontEnd Developer</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-4 text-center d-flex ftco-animate">
                <a href="#" className="services-1">
                  <span className="icon">
                    <i className="flaticon-flasks"></i>
                  </span>
                  <div className="desc">
                    <h3 className="mb-5">BackEnd Developer</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-4 text-center d-flex ftco-animate">
                <a href="#" className="services-1">
                  <span className="icon">
                    <i className="flaticon-ideas"></i>
                  </span>
                  <div className="desc">
                    <h3 className="mb-5">Window Application Developer</h3>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </section>

		
        <section className="ftco-section" id="skills-section">
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-md-12 heading-section text-center ftco-animate">
                <h1 className="big big-2">Skills</h1>
                <h2 className="mb-4">My Skills</h2>
                <p>Throughout my developer life, I got beautiful experiences in below technologies.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>PHP</h3>
                  <div className="progress">
                    <div className="progress-bar color-1" role="progressbar" aria-valuenow="90"
                      aria-valuemin="0" aria-valuemax="100" style={{width:90+'%'}}>
                      <span>90%</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>Laravel</h3>
                  <div className="progress">
                    <div className="progress-bar color-2" role="progressbar" aria-valuenow="85"
                      aria-valuemin="0" aria-valuemax="100" style={{width:90+'%'}}>
                      <span>90%</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>JQUERY</h3>
                  <div className="progress">
                    <div className="progress-bar color-2" role="progressbar" aria-valuenow="85"
                      aria-valuemin="0" aria-valuemax="100" style={{width:90+'%'}}>
                      <span>90%</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>JAVASCRIPT</h3>
                  <div className="progress">
                    <div className="progress-bar color-2" role="progressbar" aria-valuenow="85"
                      aria-valuemin="0" aria-valuemax="100" style={{width:90+'%'}}>
                      <span>90%</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>MYSQL</h3>
                  <div className="progress">
                    <div className="progress-bar color-2" role="progressbar" aria-valuenow="85"
                      aria-valuemin="0" aria-valuemax="100" style={{width:90+'%'}}>
                      <span>90%</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>MSSQL</h3>
                  <div className="progress">
                    <div className="progress-bar color-2" role="progressbar" aria-valuenow="85"
                      aria-valuemin="0" aria-valuemax="100" style={{width:90+'%'}}>
                      <span>90%</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>Vuejs</h3>
                  <div className="progress">
                    <div className="progress-bar color-3" role="progressbar" aria-valuenow="95"
                      aria-valuemin="0" aria-valuemax="100" style={{width:80+'%'}}>
                      <span>80%</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>MONGODB</h3>
                  <div className="progress">
                    <div className="progress-bar color-3" role="progressbar" aria-valuenow="95"
                      aria-valuemin="0" aria-valuemax="100" style={{width:80+'%'}}>
                      <span>80%</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>C#.Net</h3>
                  <div className="progress">
                    <div className="progress-bar color-6" role="progressbar" aria-valuenow="80"
                      aria-valuemin="0" aria-valuemax="100" style={{width:80+'%'}}>
                      <span>80%</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>Reactjs</h3>
                  <div className="progress">
                    <div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
                      aria-valuemin="0" aria-valuemax="100" style={{width:60+'%'}}>
                      <span>60%</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>Codeigniter</h3>
                  <div className="progress">
                    <div className="progress-bar color-6" role="progressbar" aria-valuenow="80"
                      aria-valuemin="0" aria-valuemax="100" style={{width:50+'%'}}>
                      <span>50%</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>NEXTjs</h3>
                  <div className="progress">
                    <div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
                      aria-valuemin="0" aria-valuemax="100" style={{width:50+'%'}}>
                      <span>50%</span>
                      </div>
                  </div>
                </div>
              </div>               
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>Linux</h3>
                  <div className="progress">
                    <div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
                      aria-valuemin="0" aria-valuemax="100" style={{width:70+'%'}}>
                      <span>70%</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>GIT Control</h3>
                  <div className="progress">
                    <div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
                      aria-valuemin="0" aria-valuemax="100" style={{width:60+'%'}}>
                      <span>60%</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>Tailwind css</h3>
                  <div className="progress">
                    <div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
                      aria-valuemin="0" aria-valuemax="100" style={{width:50+'%'}}>
                      <span>50%</span>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
 

        <section className="ftco-section ftco-project" id="projects-section">
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-md-12 heading-section text-center ftco-animate">
                <h1 className="big big-2">Projects</h1>
                <h2 className="mb-4">My Projects</h2>
                <p>Please, check my recent projects out here.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{'backgroundImage': 'url(/images/chatbot-3.png)'}}>
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3><a target="_blank" href="https://chatbot.tharapa.ai" rel="noopener noreferrer">Building chatbot just one click.</a></h3>
                    <span>Tharapa Chatbot</span>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{'backgroundImage': 'url(/images/chatbot-1.png)'}}>
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3><a target="_blank" href="https://chatbot.tharapa.ai/" rel="noopener noreferrer">Chatbot analytic dashboard.</a></h3>
                    <span>Tharapa Chatbot</span>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="project img ftco-animate d-flex justify-content-center align-items-center"  style={{'backgroundImage': 'url(/images/chatbot-2.png)'}}>
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3><a target="_blank" href="https://chatbot.tharapa.ai/" rel="noopener noreferrer">Building chatbot menu.</a></h3>
                    <span>Tharapa Chatbot</span>
                  </div>
                </div>

                <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{'backgroundImage': 'url(/images/portal-1.png)'}}>
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3><a target="_blank" href="https://portal.tharapa.ai/" rel="noopener noreferrer">Stock Control.</a></h3>
                    <span>Tharapa Portal</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{'backgroundImage': 'url(/images/chatbot-4.png)'}}>
                      <div className="overlay"></div>
                      <div className="text text-center p-4">
                        <h3><a target="_blank" href="https://chatbot.tharapa.ai/" rel="noopener noreferrer">Create chatbot flow.</a></h3>
                        <span>Tharapa Chatbot</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{'backgroundImage': 'url(images/portal-2.png)'}}>
                      <div className="overlay"></div>
                      <div className="text text-center p-4">
                        <h3><a target="_blank" href="https://portal.tharapa.ai/" rel="noopener noreferrer">Sale order management.</a></h3>
                        <span>Tharapa Portal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div  className="project img ftco-animate d-flex justify-center-center align-items-center" style={{'backgroundImage': 'url(/images/tharapa-mart-1.png)'}}>
                  <div className="overlay"></div>
                  <div className="text text-center p-4 m-auto">
                    <h3><a target="_blank" href="https://tharapamart.com/" rel="noopener noreferrer">Shopping with us.</a></h3>
                    <span>Tharapa Mart</span>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img" id="section-counter">
          <div className="container">
            <div className="row d-md-flex align-items-center">
              <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text">
                    <strong className="number" data-number="100">0</strong>
                    <span>Awards</span>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text">
                    <strong className="number" data-number="1200">0</strong>
                    <span>Complete Projects</span>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text">
                    <strong className="number" data-number="1200">0</strong>
                    <span>Happy Customers</span>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text">
                    <strong className="number" data-number="500">0</strong>
                    <span>Cups of coffee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section ftco-hireme img margin-top" style={{'backgroundImage': 'url(/images/bg_1.jpg)'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 ftco-animate text-center">
                <h2>I&apos;m <span>open</span> to work</h2>                
                <p className="mb-0"><a href="#" className="btn btn-primary py-3 px-5">Hire me</a></p>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-8 heading-section text-center ftco-animate">
                <h1 className="big big-2">Contact</h1>
                <h2 className="mb-4">Contact Me</h2>
                <p>If you think I am a right person for your team, please do not hesitate to contact me...</p>
              </div>
            </div>

            <div className="row d-flex contact-info mb-5">
              <div className="col-md-12 col-lg-4 d-flex ftco-animate">
                <div className="align-self-stretch box p-4 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-map-signs"></span>
                  </div>
                  <h3 className="mb-4">Address</h3>
                  <p>No(10/11), 13 Revenue, Hlaing Township, Insein Road, Yangon.</p>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 d-flex ftco-animate">
                <div className="align-self-stretch box p-4 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-phone2"></span>
                  </div>
                  <h3 className="mb-4">Contact Number</h3>
                  <p><a href="tel:+959979962810">+ 959979962810</a></p>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 d-flex ftco-animate">
                <div className="align-self-stretch box p-4 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-paper-plane"></span>
                  </div>
                  <h3 className="mb-4">Email Address</h3>
                  <p><a href="mailto:info@yoursite.com">yinyinkyi90@gmail.com</a></p>
                </div>
              </div>
            </div>

            <div className="row no-gutters block-9">
              <div className="col-md-6 order-md-last d-flex">
                <form action="#" className="bg-light p-4 p-md-5 contact-form">
                  <div className={`form-group  ${validityState.name?'':classes.invalid}`}>                      
                        <input type="text" className="form-control" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        {!validityState.name && <p>please fill name!</p>}                      
                  </div>
                  <div className={`form-group  ${validityState.email?'':classes.invalid}`}>
                    <input type="text" className="form-control" placeholder="Your Email (example@gmail.com)" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    {!validityState.email && <p>please fill email with correct form!</p>}  
                  </div>
                  <div className={`form-group  ${validityState.subject?'':classes.invalid}`}>
                    <input type="text" className="form-control" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                    {!validityState.subject && <p>please fill subject!</p>}  
                  </div>
                  <div className={`form-group  ${validityState.message?'':classes.invalid}`}>
                    <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message" value={bodyMessage} onChange={(e)=>setBodyMessage(e.target.value)}></textarea>
                    {!validityState.message && <p>please fill message!</p>}  
                  </div>
                  <div className="form-group">
                    <input type="submit" onClick={sendEmail} value="Send Message" className="btn btn-primary py-3 px-5"/>
                  </div>
                </form>
          
              </div>

              <div className="col-md-6 d-flex">
                <div className="img" style={{'backgroundImage': 'url(images/my_about.jpg)'}}></div>
              </div>
            </div>
          </div>
        </section>
		

        <footer className="ftco-footer ftco-section">
          <div className="container">            
            <div className="row">
              <div className="col-md-12 text-center">
                <ul className="ftco-footer-social list-unstyled">
                  <li className="ftco-animate"><a href="https://www.facebook.com/yinyin.yinkyi/" target={'blank'}><span className="icon-facebook"></span></a></li>
                  <li className="ftco-animate"><a href="https://www.linkedin.com/in/yin-yin-kyi-1a631274/" target={'blank'}><span className="icon-linkedin"></span></a></li>
                    
                </ul>                
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">                
                <p>
                Copyright &copy; 2022 All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="#" target="_blank">YYK</a>
              </p>
              </div>
            </div>
          </div>
        </footer>
    
      <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee"/>
          <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00"/>
          </svg>
      </div>
    </Fragment>
  )
}
