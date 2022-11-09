import { useContext } from 'react';
import { ColorThemeContext } from '../context/colorThemeContext';
import classNames from 'classnames';
import basicInfo from '../data/basic-info.json';

function Header() {
  const theme = useContext(ColorThemeContext)

  return (
    <div className={classNames('header', theme.color)} >
      <div className='header-info'>
        <h1>{basicInfo.name}</h1>
        <div>{basicInfo.email}</div>
        <div>{basicInfo.phone}</div>
      </div>

      <img src={require('../assets/portraits/me-' + theme.color + '.jpg')}></img>
    </div>
  );
}

export default Header;
