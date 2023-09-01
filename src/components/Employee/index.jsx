import './Employee.css'

import { RiCloseCircleFill, RiHeartFill, RiHeartLine } from 'react-icons/ri';

const Employee = ({ employee, primaryColor, deleteEmployee, changeFav }) => {
  const { id, name, job, picture, role, fav } = employee;

  return (
    <div className='employee'>
      <RiCloseCircleFill 
        className='employee__delete'
        onClick={() => deleteEmployee(id)}
      />
      <div className="employee__section" style={{ background: primaryColor }}>
        <img src={picture} alt="eduardoposas" />
      </div>
      <div className="employee__content">
        <h3 className="employee__title">{name}</h3>
        <p className="employee__description">{job}</p>
        {fav ? <RiHeartFill color={primaryColor} onClick={() => changeFav(id)} /> : <RiHeartLine onClick={() => changeFav(id)}/>}
      </div>
    </div>
  )
}

export default Employee;