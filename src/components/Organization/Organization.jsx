import './Organization.css';

import showButton from '../../assets/showButton.png';

const Organization = ({ showForm, setShowForm }) => {

    const handleClick = () => {
        setShowForm(!showForm);
    };

    return (
        <section className='container organization'>
            <h2 className="organization__heading">Mi Organización</h2>
            <img
                src={showButton}
                alt="show form"
                onClick={handleClick}
            />
        </section>
    )
}

export default Organization