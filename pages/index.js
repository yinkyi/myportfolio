import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useRef, useState,useReducer } from 'react'
import axios from 'axios'
import classes from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSpinner } from '@fortawesome/free-solid-svg-icons'

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
  const [loading,setLoading] = useState(false);
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
    debugger
    if(!formvalidate){
      return false;
    }
    setLoading(true);
    axios.post('/api/email',{name,email,subject,bodyMessage})
     .then(    
     (res)=>{
      if(res.data.result === 1){
        setLoading(false);
        setName('');
        setEmail('');
        setSubject('');
        setBodyMessage('');
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
        <header id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h1 className="h1-large">I am Yin Yin Kyi.<br/> I am a software developer.</h1>
                            <a className="btn-solid-lg" href="/static/file/YINYINKYICV.pdf" download>Download CV</a>
                            <a className="btn-outline-lg page-scroll" href="#contact"><i className="fas fa-user"></i>Contact Me</a>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </header> 
     
        <div id="about" className="basic-1 bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="text-container first">
                            <h2>Hi there I'm Yin,</h2>
                            <p>And I love experimenting with code. Having 9 years of professional experience in the IT industry. I am decisive, goal-oriented, self-motivated, willing to work hard, and a fast learner.</p>
                        </div> 
                    </div> 
                    <div className="col-lg-4">
                        <div className="text-container second">
                            <div className="time">2022 - Present</div>
                            <h6>Senior Full-Stack Developer</h6>
                            <a className={`time no-line ${classes.grey}`} href="https://www.ringzerogames.com/" target={'blank'}>RingZero IT Service Co.,Ltd.(Bangkok)</a>
                            <div className="time">2018 - 2022</div>
                            <h6>Senior Developer</h6>
                            <a className={`time no-line ${classes.grey}`} href="https://baganit.com/" target={'blank'}>BAGAN INNOVATION TECHNOLOGY CO.,LTD</a>
                        </div>
                    </div> 
                    <div className="col-lg-4">
                        <div className="text-container third">
                            <div className="time">2015 - 2018</div>
                            <h6>Software Developer</h6>
                            <a className={`time no-line ${classes.grey}`} href="#">SOLIDCAD TECHNOLOGY PTE (SINGAPORE BASED)</a>

                            <div className="time">2013 - 2015</div>
                            <h6>Senior Developer</h6>
                            <a className={`time no-line ${classes.grey}`} href="https://www.mtg.com.mm/" target={'blank'} >MYANMAR TECHNOLOGY GATEWAY CO.,LTD</a>
                          
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
      
        <div id="services" className="basic-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading">Careers</h2>
                        <p className="p-heading">I am used to both front-end and back-end development. I also used to working with window development with C#.Net for 5 years.</p>
                    </div> 
                </div> 
                <div className="row">
                    <div className="col-lg-4">
                        <div className="text-box text-center">
                            <i className="far fa-gem"></i>
                            <h4>BackEnd Dev</h4>
                          
                        </div> 
                    </div> 
                    <div className="col-lg-4">
                        <div className="text-box text-center">
                            <i className="fas fa-code"></i>
                            <h4>FrontEnd Dev</h4>
                          
                        </div> 
                    </div> 
                    <div className="col-lg-4">
                        <div className="text-box text-center">
                            <i className="fas fa-tv"></i>
                            <h4>Window Dev</h4>
                          
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
        
      <div className="split">
        <div className="area-1">
        </div>
              <div className="area-2 bg-gray">
                <div className="container">    
                    <div className="row">
                        <div className="col-lg-12">     
                        
                            <div className="text-container">
                                <h2>Why Work With Me</h2>
                                <p>I am passionate and love coding. I am also a flexible person in both communication and learning new technologies .</p>
                                <h5>DEVELOPMENT SKILLS</h5>
                                <p className='mb-3'>I am familiar and work on a daily basis with PHP, Laravel Framework, Vuejs, Reactjs, Nestjs, Nodejs, and other modern frameworks.</p>
                                <div className="icons-container mt-0">

                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" />

                                <img src="images/laravel.svg" />

                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain-wordmark.svg" />

                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />

                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />
                                <img src="images/nestjs.svg" />
          
                                <img src="images/details-icon-javascript.png" alt="alternative"/>
                                </div> 
                                <h5>Other SKILLS</h5>
                                <p className='mb-3'>I have also experience in MongoDB, MYSQL, MSSQL, Git control and Linux.</p>
                                <div className="icons-container mt-0">

                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />

                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />

                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" />

                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />

                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
          
                                </div> 
                            
                                
                            </div> 
                          

                        </div> 
                    </div>
                </div> 
        </div> 
        </div> 
      
        <div id="projects" className="basic-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading">My projects</h2>
                        <p className="p-heading">Listed below are some of the most representative projects I've worked on.</p>
                    </div> 
                </div> 
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-container">
                            <div className="image-container">
                                <a href="https://tharapamart.com/" target={'blank'}>
                                    <img className="img-fluid" src="images/my-project-1.png" alt="alternative"/>
                                </a>
                            </div> 
                            
                            <p>
                                <strong className="mr-2">Project:</strong>
                                <code className="ml-2">Tharapa Mart</code> 
                                <span> Developed for e-commerce platform. </span>
                                <a href="https://tharapamart.com/" className="blue ml-2">link</a>
                            </p>
                        </div>
                        <div className="text-container">
                            <div className="image-container">
                                <a href="https://chatbot.tharapa.ai/automation">
                                    <img className="img-fluid" src="images/my-project-2.png" alt="alternative"/>
                                </a>
                            </div> 
                            <p>
                                <strong className="mr-2">Project:</strong>
                                <code className="ml-2">Chatbot</code>
                                <span> Content management system for chatbot building. </span>
                                 <a className="blue" href="https://chatbot.tharapa.ai/automation">link</a>
                            </p>
                        </div> 
                        <div className="text-container">
                            <div className="image-container">
                                <a href="https://livechat.tharapa.ai/">
                                    <img className="img-fluid" src="images/my-project-4.png" alt="alternative"/>
                                </a>
                            </div> 
                                <strong className="mr-2">Project:</strong>
                                <code className="ml-2">Thrapa Chat</code>
                                <span> Create live chat environment for virtual facebook messenger and viber to communicate with their customers. </span>
                                 <a className="blue" href="https://livechat.tharapa.ai/">link</a>
                           
                        </div> 
                        <div className="text-container">
                            <div className="image-container">
                                <a href="https://portal.tharapa.ai/sales-dashboard">
                                    <img className="img-fluid" src="images/my-project-3.png" alt="alternative"/>
                                </a>
                            </div> 
                            <p>
                                <strong className="mr-2">Project:</strong>
                                <code className='mr-2'>Tharapa Portal</code>
                                <span className='mr-2'>Stock management system , sale order processing and customer information.</span>   
                                <a className="blue" href="https://portal.tharapa.ai/sales-dashboard">link</a></p>
                        </div> 
                        <div className="text-container">
                            <div className="image-container">
                                <a href="https://my.baganintel.ai/">
                                    <img className="img-fluid" src="images/my-project-5.png" alt="alternative"/>
                                </a>
                            </div> 
                            <p>
                                <strong className='mr-2'>Project:</strong> 
                                <code className='mr-2'>BI Miner</code>
                                <span className='mr-2'>Facebook Page analytic management system.</span>  
                                <a className="blue" href="https://my.baganintel.ai/">link</a></p>
                        </div>
                        <div className="text-container">
                            <div className="image-container">
                                <a href="http://18.143.244.78/">
                                    <img className="img-fluid" src="images/pos_admin/1.png" alt="alternative"/>
                                </a>
                            </div> 
                            <p>
                                <strong className='mr-2'>Project:</strong> 
                                <code className='mr-2'>POS BackOffice Platform</code>
                                <a className="blue" href="http://18.143.244.78/">link</a></p>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>

         <div className="basic-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="text-container">
                            <div className="image-container">
                                <a href="https://tharapa.ai/">
                                    <img className="img-fluid" src="images/pos_terminal/1.png" alt="alternative"/>
                                </a>
                            </div>
                            <p>
                                <strong className='mr-2'>For:</strong> 
                                <code className='mr-2'>RingZero</code>
                                <strong className='mr-2'>Project:</strong> 
                                <code>POS Terminal</code>
                            </p>
                        </div> 
                    </div>
                    <div className="col-lg-4">
                        <div className="text-container">
                            <div className="image-container">
                               
                                    <img className="img-fluid" src="images/pos_terminal/2.png" alt="alternative"/>
                            </div> 
                            <p> <code className='mr-2'>Sale Transaction</code> </p>
                        </div> 
                    </div> 
                    <div className="col-lg-4">
                        <div className="text-container">
                            <div className="image-container">
                                <a href="http://www.cyberkingict.com/">
                                    <img className="img-fluid" src="images/pos_terminal/3.png" alt="alternative"/>
                                </a>
                            </div> 
                            <p> <code className='mr-2'>Sale Refund or Void</code> </p>
                        </div> 
                    </div>
                </div> 
                <div className="row">
                    <div className="col-lg-4">
                        <div className="text-container">
                            <div className="image-container">
                                <a href="https://www.readsnote.com/">
                                    <img className="img-fluid" src="images/pos_terminal/4.png" alt="alternative"/>
                                </a>
                            </div> 
                            <p> <code className='mr-2'>Sale Refund Transaction</code> </p>
                        </div> 
                    </div>
                    <div className="col-lg-4">
                        <div className="text-container">
                            <div className="image-container">
                                <a href="https://my.baganintel.ai/">
                                    <img className="img-fluid" src="images/pos_terminal/6.png" alt="alternative"/>
                                </a>
                            </div> 
                            <p> <code className='mr-2'>Stock Adjustment</code> </p>
                        </div> 
                    </div>
                    <div className="col-lg-4">
                        <div className="text-container">
                            <div className="image-container">
                                <a href="https://my.baganintel.ai/">
                                    <img className="img-fluid" src="images/pos_terminal/7.png" alt="alternative"/>
                                </a>
                            </div> 
                            <p> <code className='mr-2'>Setting</code> </p>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>  
       
        <div className="basic-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="text-container">
                            <div className="image-container">
                                <a href="https://tharapa.ai/">
                                    <img className="img-fluid" src="images/my-work-1.png" alt="alternative"/>
                                </a>
                            </div>
                            <p>
                                <strong className='mr-2'>For:</strong> 
                                <code className='mr-2'>BIT</code>
                                <strong className='mr-2'>Project:</strong> 
                                <span className='mr-2'>Bagan Innovation Technology's tharapa product landing page website. </span>
                                <a className="blue" href="https://tharapa.ai/">link</a>
                            </p>
                        </div> 
                    </div>
                    <div className="col-lg-4">
                        <div className="text-container">
                            <div className="image-container">
                               
                                    <img className="img-fluid" src="images/my-work-2.png" alt="alternative"/>
                            </div> 
                            <p>
                                <strong className='mr-2'>For:</strong> 
                                <code className='mr-2'>BIT</code>
                                <strong className='mr-2'>Project:</strong> 
                                <code className='mr-2'>Tharapa Chat</code>
                            </p>
                        </div> 
                    </div> 
                    <div className="col-lg-4">
                        <div className="text-container">
                            <div className="image-container">
                                <a href="http://www.cyberkingict.com/">
                                    <img className="img-fluid" src="images/my-work-3.png" alt="alternative"/>
                                </a>
                            </div> 
                            <p>
                                <strong className='mr-2'>For:</strong> 
                                <code className='mr-2'>Cyber King</code>
                                <strong className='mr-2'>Project:</strong> 
                                <code className='mr-2'>Website</code>
                                <a className="blue" href="http://www.cyberkingict.com/">link</a>
                            </p>
                           
                        </div> 
                    </div>
                </div> 
                <div className="row">
                    <div className="col-lg-4">
                        <div className="text-container">
                            <div className="image-container">
                                <a href="https://my.baganintel.ai/">
                                    <img className="img-fluid" src="images/my-work-5.png" alt="alternative"/>
                                </a>
                            </div> 
                            <p>
                                <strong className='mr-2'>For:</strong> 
                                <code className='mr-2'>BTI</code>
                                <strong className='mr-2'>Project:</strong> 
                                <code className='mr-2'>BI Miner</code>
                                <a className="blue" href="https://my.baganintel.ai/">link</a>
                            </p>
                        </div> 
                    </div>
                    <div className="col-lg-4">
                        <div className="text-container">
                            <div className="image-container">
                                <a href="https://my.baganintel.ai/">
                                    <img className="img-fluid" src="images/my-work-6.png" alt="alternative"/>
                                </a>
                            </div> 
                            <p>
                                <strong className='mr-2'>For:</strong> 
                                <code className='mr-2'>BTI</code>
                                <strong className='mr-2'>Project:</strong> 
                                <code className='mr-2'>BI Miner</code>
                                <a className="blue" href="https://my.baganintel.ai/">link</a>
                            </p>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
        
         <div id="testimonial" className="cards-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading">A few words from people that chose to work with me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    
                    <div className="card">
                            <div className="card-body">
                                <p className="testimonial-text">“I have had the pleasure of working with Yin Yin Kyi, our Senior Full Stack Engineer. She is highly skilled, works independently, and consistently delivers excellent results. She is proactive in self-learning new technologies and is always ready to help her teammates. She provides great support to junior members, making her an invaluable part of our team.”</p>
                                <div className="details">
                                    <img src="images/testimonial-5.jpeg" alt="alternative"/>
                                    <div className="text">
                                        <div className="testimonial-author">Pyae Phyo Hein</div>
                                        <div className="occupation">Project Manager - Bagan Innovation Technology</div>
                                    </div> 
                                </div> 
                            </div>
                    </div>
                    
                     
                        <div className="card">
                            <div className="card-body">
                                <p className="testimonial-text">“Yin Yin Kyi is a smart and hardworking individual. As a senior full stack developer, she consistently delivers excellent work. Her technical skills are top-notch, and she is always willing to help her teammates. Yin Yin tackles challenges with ease and brings innovative solutions to the table. Her dedication and professionalism make her a valuable asset to any team. I am continually impressed by her contributions and positive attitude.”</p>
                                <div className="details">
                                    <img src="images/testimonial-4.jpeg" alt="alternative"/>
                                    <div className="text">
                                        <div className="testimonial-author">Myo Thu</div>
                                        <div className="occupation">Senior Software Engineer - Ooredoo Myanmar</div>
                                    </div> 
                                </div> 
                            </div>
                        </div>
                    
                        <div className="card">
                            <div className="card-body">
                                <p className="testimonial-text">“Working with Yin Yin Kyi has been a fantastic experience. As an Android developer, I appreciate her expertise in full-stack development. Her ability to seamlessly integrate mobile apps and back-end systems has greatly enhanced our projects. She is skilled, reliable, and always delivers high-quality work on time.”</p>
                                <div className="details">
                                    <img src="images/testimonial-6.jpeg" alt="alternative"/>
                                    <div className="text">
                                        <div className="testimonial-author">Htoo Aung Kyaw</div>
                                        <div className="occupation">Android Developer - Codigo Myanmar</div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                       

                    </div>
                     <div className="col-lg-12">
                    
                     <div className="card">
                            <div className="card-body">
                                <p className="testimonial-text">“She is a kind person who always helps and shares new knowledges with her team members”</p>
                                <div className="details">
                                    <img src="images/testimonial-3.jpg" alt="alternative"/>
                                    <div className="text">
                                        <div className="testimonial-author">Adithep Sudcharee</div>
                                        <div className="occupation">Front-end Developer - RingZero IT Service Co.,Ltd</div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                     
                        <div className="card">
                            <div className="card-body">
                                <p className="testimonial-text">“Loved to work with Yin Yin she's such an awesome developer with great attention to details. She also has a great eye for design”</p>
                                <div className="details">
                                    <img src="images/testimonial-1.jpeg" alt="alternative"/>
                                    <div className="text">
                                        <div className="testimonial-author">Chan Nyein Kyaw</div>
                                        <div className="occupation">Technical Lead- RingZero IT Service Co.,Ltd</div>
                                    </div> 
                                </div> 
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <p className="testimonial-text">“Yin Yin is a highly skilled full-stack developer who possesses a mastery of various development tools. Her expertise goes beyond coding, as she's also adept at architectural design. This makes her a valuable asset to her team, as she can effectively troubleshoot and solve technical challenges.
This version highlights Yin Yin's key strengths as a full-stack developer and emphasizes her problem-solving abilities. It also avoids redundancy and uses concise language.”</p>
                                <div className="details">
                                    <img src="images/testimonial-7.jpeg" alt="alternative"/>
                                    <div className="text">
                                        <div className="testimonial-author">Ananth Nag KV</div>
                                        <div className="occupation">Technical QA Lead - RingZero Game Studio Ltd</div>
                                    </div> 
                                </div> 
                            </div>
                        </div> 
                    
                        
                       

                    </div> 
                </div> 
            </div> 
        </div> 

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <hr className="section-divider"/>
                </div>
            </div> 
        </div>
        
        {/* <div className="accordion-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading">Frequent questions</h2>
                    </div> 
                </div> 
                <div className="row">
                    <div className="col-lg-12">

                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How can I contact you and quickly get a quote for my online project?
                                    </button>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Do you create designs from the ground up or you are using themes?
                                    </button>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                        The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Will I receive any included maintenance or warranty after project delivery?
                                    </button>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div className="card-body">
                                        The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingFour">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        If something goes wrong with the project can I have my money back?
                                    </button>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div className="card-body">
                                        The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingFive">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        What's your preferred method of payment and do you need an advance?
                                    </button>
                                </div>
                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                    <div className="card-body">
                                        The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details
                                    </div>
                                </div>
                            </div>
                        </div> 

                    </div> 
                </div> 
            </div> 
        </div>  */}
     
        <div id="contact" className="form-1 bg-gray">
            <div className="container">
                <div className="row mb-2">
                    <div className="col-lg-12">
                        <h2>Contact details</h2>
                        <p>
                            <span className='mr-2'>The most effective way to contact me is by using the contact form, messaging me on </span>
                            <code><a className='blue' href="https://www.linkedin.com/in/yin-yin-kyi-1a631274/" target="_blank" rel="noopener noreferrer">LinkedIn</a></code>
                            <span className='mr-2 ml-2'>, or emailing me directly at</span>
                            <code><a className='blue' href="mailto:yinyinkyi90@gmail.com">yinyinkyi90@gmail.com</a></code>.</p>

                    </div> 
                  
                </div> 
                
                <div className="row">
                    <div className="col-lg-12">
                        <form id="contactForm">
                            <h6>Contact Form</h6>
                            <div className={`form-group  ${validityState.name?'':classes.invalid}`}>
                                <input type="text" className="form-control-input" id="cname" value={name} onChange={(e)=>setName(e.target.value)} required/>
                                <label className="label-control" htmlFor="cname">Name</label>
                            </div>
                            <div className={`form-group  ${validityState.email?'':classes.invalid}`}>
                                <input type="email" className="form-control-input" id="cemail" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                                <label className="label-control" htmlFor="cemail">Email</label>
                            </div>
                            <div className={`form-group  ${validityState.subject?'':classes.invalid}`}>
                                <input type="text" className="form-control-input" id="csubject" value={subject} onChange={(e)=>setSubject(e.target.value)} required/>
                                <label className="label-control" htmlFor="csubject">subject</label>
                            </div>
                            <div className={`form-group  ${validityState.message?'':classes.invalid}`}>
                                <textarea className="form-control-textarea" id="cmessage" value={bodyMessage} onChange={(e)=>setBodyMessage(e.target.value)} required></textarea>
                                <label className="label-control" htmlFor="cmessage">Message</label>
                            </div>
                            <div className="form-group">
                                <button type="submit" onClick={sendEmail} className="form-control-submit-button">
                                    {loading?<FontAwesomeIcon icon={faSpinner} spin />:''}
                                    Send Message
                                </button>
                            </div>
                        </form>
                       
                    </div> 
                </div> 
            </div> 
        </div> 

        
    </Fragment>
  )
}
