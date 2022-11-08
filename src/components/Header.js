import basicInfo from '../data/basic-info.json';
const me = require('../../assets/portraits/me-blue.jpg');

function Header() {
  return (
    <div className='header'>
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
