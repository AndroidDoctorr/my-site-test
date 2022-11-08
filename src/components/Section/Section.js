import './Section.css';

function Section(props) {
  return (
    <div className='section'>
        <div className='section-title'>
            <h2>{props.title}</h2>
        </div>
        <div className='section-items'>
            {props.data.map(
              item => { return props.template({ item }) }
            )}
        </div>
    </div>
  );
}

export default Section;
