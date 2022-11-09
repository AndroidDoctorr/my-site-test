import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { ColorThemeContextProvider } from '../context/colorThemeContext'

function App() {
  return (
    <ColorThemeContextProvider>
      <div className='app'>
        <div className='app-page'>
          <Header />
          <Body />
        </div>
        <Footer />
      </div>
    </ColorThemeContextProvider>
  )
}

export default App
