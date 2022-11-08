import './Section.css';
import basicInfo from '../../data/basic-info.json';
const me = require('../../assets/me-blue.jpg');

function Section(props) {
  return (
    <div className='section'>
        <div className='section-title'>
            <h2>{props.title}</h2>
        </div>
        <div className='section-items'>
                
        </div>
    </div>
  );
}

export default Section;
