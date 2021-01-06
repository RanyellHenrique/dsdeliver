import './styles.css';
import { ReactComponent as Youtube } from '../../asserts/Youtube.svg';
import { ReactComponent as Instagram } from '../../asserts/Instagram.svg';
import { ReactComponent as Linkedin } from '../../asserts/Linkedin.svg';


const Footer = () => {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
                    <Youtube />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <Linkedin />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/?hl=pt-br" target="_new">
                    <Instagram />
                </a>
            </div>
        </footer>
    );
}

export default Footer;