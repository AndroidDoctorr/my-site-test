import './Experience.css';

function Role(props) {
    return (
        <div>
            <h4 className='role'>
                {props.role.title}
            </h4>
            <ul className='role-duties'></ul>
            <div className='role-date'>
                {props.role.date}
            </div>
        </div>
    );
}

function Experience(props) {
    return (
        <div className='experience'>
            <h3 className='experience-title'>{props.item.title}</h3>
            <div className='experience-body'>
                <div className='experience-color'></div>
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
