import { useContext } from 'react';
import { ColorThemeContext } from '../context/colorThemeContext';
import basicInfo from '../data/basic-info.json';

const me = require('../assets/portraits/me-blue.jpg');

function Header() {
  const theme = useContext(ColorThemeContext)

  return (
    <div className={'header ' + theme.theme} >
      <div className='header-info'>
        <h1>{basicInfo.name}</h1>
        <div>{basicInfo.email}</div>
        <div>{basicInfo.phone}</div>
      </div>

      <img src={me} className='i-b'></img>
    </div>
  );
}

export default Header;
