function Certification(props) {
    return (
        <div className='certification'>
            <div className='certification-icon'>
                <a href={props.item.url} target="_blank" noopener noreferrer>
                    <img src={props.item.image}></img>
                </a>
            </div>
            <h3 className='certification-title'>
                {props.item.title}
            </h3>
            <div className='certification-date'>
                {props.item.date}
            </div>
        </div>
    );
}

export default Certification;
