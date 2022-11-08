import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom, faClock } from "@fortawesome/free-solid-svg-icons";

function ToggleNinetiesMode() {

}

function ChangeTheme() {

}

function Footer() {
    return (
        <div className='footer'>
            <a href={require("../Andrew_Torr_Resume.pdf")} download>Download Resume</a>
            <div className='footer-buttons'>
                <button onClick={() => ToggleNinetiesMode()}>
                    <FontAwesomeIcon icon={faClock} />
                    <span>{"90's Mode"}</span>
                </button>
                <button onClick={() => ChangeTheme()}>
                    <FontAwesomeIcon icon={faRandom} />
                    <span>{"Theme"}</span>
                </button>
            </div>
        </div>
    );
}

export default Footer;
