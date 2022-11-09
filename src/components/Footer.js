import { useState } from 'react';
import { ColorThemeContext, colors } from '../context/colorThemeContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom, faClock } from "@fortawesome/free-solid-svg-icons";

function ToggleNinetiesMode() {

}

function GetNextThemeColorIndex(color) {
    let colorIndex = colors.indexOf(color)
    colorIndex++
    if (colorIndex >= colors.length) {
        colorIndex = 0
    }
    return colorIndex
}

function Footer() {
    let [color, setColorTheme] = useState(ColorThemeContext)

    return (
        <div className='footer'>
            <a href={require("../Andrew_Torr_Resume.pdf")} download>Download Resume</a>
            <div className='footer-buttons'>
                <button onClick={() => ToggleNinetiesMode()}>
                    <FontAwesomeIcon icon={faClock} />
                    <span>{"90's Mode"}</span>
                </button>
                <button onClick={() => {
                    let colorIndex = GetNextThemeColorIndex(color)
                    setColorTheme(colors[colorIndex])
                    console.log(colors[colorIndex])
                }}>
                    <FontAwesomeIcon icon={faRandom} />
                    <span>{"Theme"}</span>
                </button>
            </div>
        </div>
    );
}

export default Footer;
