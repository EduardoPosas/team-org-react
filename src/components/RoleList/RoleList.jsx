import './RoleList.css';

const RoleList = ({ value, setValue, teams, required }) => {

    return (
        <>
            <label>Equipo</label>
            <select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required={required}
            >
                <option value='' hidden disabled>Seleccionar equipo</option>
                {
                    teams.map((team, index) => <option key={index} value={team}>{team}</option>)
                }
            </select>
        </>

    )
}

export default RoleList;

