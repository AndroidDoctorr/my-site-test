import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { ColorThemeContext, colors } from '../context/colorThemeContext';

function App() {
  return (
    <ColorThemeContext.Provider value={colors[0]}>
      <div className='app'>
        <div className='app-page'>
          <Header />
          <Body />
        </div>
        <Footer />
      </div>
    </ColorThemeContext.Provider>
    
  );
}

export default App;
