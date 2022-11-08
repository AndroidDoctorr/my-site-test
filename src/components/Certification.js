function Certification(props) {
    return (
        <div className='certification'>
            <div className='certification-icon'>
                <img src={props.item.image}></img>
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
