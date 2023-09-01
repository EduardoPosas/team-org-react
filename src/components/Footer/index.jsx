import './Footer.css';

import footerBg from '../../assets/footer-img.png';
import headerLogo from '../../assets/logo.png';
import linkedinLogo from '../../assets/linkedin-logo.svg';
import githubLogo from '../../assets/github-logo.svg';


const Footer = () => {
  return (
    <footer className='footer' style={{backgroundImage: `url(${footerBg})`}}>
        <div className="container footer__content">
            <div className="footer__media">
                <a href="https://www.linkedin.com/in/alexanderposas/" target='_blank'>
                    <img src={linkedinLogo} alt="facebook" />
                </a>
                <a href="https://github.com/EduardoPosas/" target='_blank'>
                    <img src={githubLogo} alt="instagram" />
                </a>
            </div>
            <img src={headerLogo} alt="" className="footer__logo" />
            <p className="footer__copyright">&copy; Desarrollado por Alexander Pozas</p>
        </div>
    </footer>
  )
}

export default Footer;