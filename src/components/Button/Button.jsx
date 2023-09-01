import './Button.css';

const Button = ({ children }) => {
    return (
        <button className='button button--primary'>{children}</button>
    )
}

export default Button;