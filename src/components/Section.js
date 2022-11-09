import { useContext } from 'react';
import { ColorThemeContext } from '../context/colorThemeContext';

function Section(props) {
  const theme = useContext(ColorThemeContext)

  return (
    <div className='section'>
        <div className={'section-title ' + theme.color}>
            <h2>{props.title}</h2>
        </div>
        <div>
            {props.data.map(
              item => { return props.template({ item }) }
            )}
        </div>
    </div>
  );
}

export default Section;
