import './Experience.css';

function Experience(props) {
    return (
        <div className='experience'>
            <h3 className='experience-title'>{props.item.title}</h3>
            <div className='experience-body'>
                <div className='experience-color'></div>
                <div className='experience-roles'>
                    <h4 className='experience-role'></h4>
                    <ul className='experience-duties'></ul>
                </div>
                <div className='experience-date'></div>
            </div>

        </div>
    );
}

export default Experience;
