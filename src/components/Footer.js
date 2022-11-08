import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom, faClock } from "@fortawesome/free-solid-svg-icons";

function ToggleNinetiesMode() {

}

function ChangeTheme() {

}

function Footer() {
    return (
        <div className='footer'>
            <a href='../Andrew_Torr_Resume.pdf'>Download Resume</a>
            <div className='footer-buttons'>
                <button onClick={() => ToggleNinetiesMode()}>
                    <FontAwesomeIcon icon={faClock} />
                    {"90's Mode"}
                </button>
                <button onClick={() => ChangeTheme()}>
                    <FontAwesomeIcon icon={faRandom} />
                    {"Theme"}
                </button>
            </div>
        </div>
    );
}

export default Footer;
