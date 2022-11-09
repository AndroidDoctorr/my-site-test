import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { ColorThemeContextProvider } from '../context/colorThemeContext'
import { NinetiesModeContextProvider } from '../context/ninetiesModeContext'

function App() {
	return (
		<ColorThemeContextProvider>
			<NinetiesModeContextProvider>
				<div className='app'>
					<div className='app-page'>
						<Header />
						<Body />
					</div>
					<Footer />
				</div>
			</NinetiesModeContextProvider>
		</ColorThemeContextProvider>
	)
}

export default App
