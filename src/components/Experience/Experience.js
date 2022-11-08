import './Experience.css';

function Role(props) {
    return (
        <div className='role'>
            <div className='role-info'>
                <h4 className='role-title'>
                    {props.role.title}
                </h4>
                <ul className='role-duties'>
                    {props.role.duties.map(
                        duty => { return <li>{duty}</li> }
                    )}
                </ul>
            </div>
            <div className='role-date'>
                {props.role.dates}
            </div>
        </div>
    );
}

function Experience(props) {
    return (
        <div className='experience'>
            <h3 className='experience-title'>{props.item.title}</h3>
            <div className='experience-body'>
                <div className='experience-colorBar'>
                    <div
                        className='experience-color'
                        style={{ backgroundColor: props.item.color }}
                    ></div>
                </div>
                <div className='experience-roles'>
                    {props.item.roles.map(
                        role => { return Role({ role }) }
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experience;
