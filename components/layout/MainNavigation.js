import classes from '../../pages/index.module.css';
import Link from 'next/link'
import { Fragment } from 'react';
function MainNavigation() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
        <div className="container">
            <a className={classes.navbarbrand} href="index.html">
              YIN YIN KYI
            </a>  

            <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="page-scroll" href="/#header"><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="page-scroll" href="/#about"><a className="nav-link">About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="page-scroll" href="/#services"><a className="nav-link">Careers</a></Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <Link  href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <a className="nav-link dropdown-toggle">Drop</a>
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="dropdown01">
                            <Link className="page-scroll" href="project"><a className="dropdown-item">Project Details</a></Link>
                            <div className="dropdown-divider"></div>
                            <Link className="page-scroll" href="terms.html"><a className="dropdown-item">Terms Conditions</a></Link>
                            <div className="dropdown-divider"></div>
                            <Link className="page-scroll" href="privacy.html"><a className="dropdown-item">Privacy Policy</a></Link>
                        </div>
                    </li> */}
                    <li className="nav-item">
                        <Link className="page-scroll" href="/#projects"><a className="nav-link">Projects</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="page-scroll" href="/#contact"><a className="nav-link">Contact</a></Link>
                    </li>
                </ul>
                <span className="nav-item social-icons">
                    <span className="fa-stack">
                        <a href="https://www.facebook.com/yinyin.yinkyi">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a href="https://www.linkedin.com/in/yin-yin-kyi-1a631274/">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-linkedin fa-stack-1x"></i>
                        </a>
                    </span>
                </span>
            </div> 
        </div>
    </nav>
  );
}

export default MainNavigation;
