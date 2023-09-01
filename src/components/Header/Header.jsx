
import './Header.css'
import headerImg from '../../assets/header-bg.png'
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header className='header' style={{ backgroundImage: `url(${headerImg})` }}>
            <div className="header__content container">
                <img src={logo} alt="org logo" />
                <h1>Personas y equipos <span>organizados en un solo lugar</span></h1>
            </div>
        </header>
    )
}

export default Header