function ToggleNinetiesMode() {

}

function ChangeTheme() {

}

function Footer() {
    return (
        <div className='footer'>
            <a href='../Andrew_Torr_Resume.pdf'>Download Resume</a>
            <div className='footer-buttons'>
                <button onClick={() => ToggleNinetiesMode()}>90's Mode</button>
                <button onClick={() => ChangeTheme()}>Theme</button>
            </div>
        </div>
    );
}

export default Footer;
