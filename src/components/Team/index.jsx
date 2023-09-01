import hexToRgba from 'hex-to-rgba';

import Employee from '../Employee';

import './Team.css';

const Team = (
    {
        data,
        employees,
        deleteEmployee,
        updateTeamBackground,
        changeFav
    }
) => {

    const { id, name, primaryColor, secondaryColor } = data;
    const sectionBackground = { backgroundColor: hexToRgba(primaryColor, 0.6) };
    const borderColor = { borderColor: primaryColor }

    return (
        <>
            {
                employees.length > 0 &&
                <section className='team' style={sectionBackground}>
                    <input
                        type="color"
                        className="team__color"
                        value={primaryColor}
                        onChange={e => updateTeamBackground(e.target.value, id)}
                    />
                    <h2 className="team__heading" style={borderColor}>{name}</h2>
                    <div className="team__container container">
                        {
                            employees.map(employee => <Employee
                                key={employee.id}
                                employee={employee}
                                primaryColor={primaryColor}
                                deleteEmployee={deleteEmployee}
                                changeFav={changeFav}
                            />
                            )
                        }
                    </div>
                </section>
            }
        </>
    )

}

export default Team;