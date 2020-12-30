import React, { Component } from 'react';
import './style.css';
import LauncherWindowBackground from '../assets/images/launcher-window-background@2x.png';
import SoundWaveIllustration from '../assets/illustrations/sound-wave.svg';
import GoogleLogo from '../assets/illustrations/google-logo.svg';
import FacebookLogo from '../assets/illustrations/facebook-logo.svg';

const LauncherWindowStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url( ${LauncherWindowBackground} )`,
    backgroundColor: '#181818',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const ElementsContainerStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: 'radial-gradient(rgba(0,0,0,50%), rgba(0,0,0,100%))',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

const FilledBtnStyle = {
    backgroundColor: '#1DB954',
    borderRadius: 'calc( (100vh / 1080)*53 )',
    width: 'calc( (100vh / 1080)*500 )',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc( (100vh / 1080)*80 )'
}

const HollowBtnStyle = {
    borderWidth: '2px',
    borderColor: 'white',
    borderRadius: 'calc( (100vh / 1080)*53 )',
    width: 'calc( (100vh / 1080)*500 )',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc( (100vh / 1080)*80 )'
}

export class LauncherWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSigninWithGoogleHovered: false,
            isSigninWithFacebookHovered: false
        }
    }

    render() {
        return (
            <div style={LauncherWindowStyle}>
                <div className="elements-container" style={ElementsContainerStyle}>
                    <img src={SoundWaveIllustration} style={{ width: 'calc( (100vh / 1080)*418 )', height: 'auto' }} />
                    <div className="mt-4" style={{ fontFamily: 'gotham-bold', color: 'white', fontSize: 'calc( (100vh / 1080)*52 )' }}>Millions of songs</div>
                    <div style={{ fontFamily: 'gotham-bold', color: 'white', fontSize: 'calc( (100vh / 1080)*52 )', marginTop: 'calc( -1*(100vh / 1080)*28 )' }}>Listen on Walkman.</div>
                    <div className="mt-5" style={{ fontFamily: 'gotham-medium', color: 'white', fontSize: 'calc( (100vh / 1080)*22 )' }}>Continue with</div>
                    <div style={FilledBtnStyle}>
                        <img src={GoogleLogo} className="mx-4" style={{ width: 'calc( (100vh / 1080)*32 )', height: 'auto' }}/>
                        <span style={{ fontFamily: 'helvetica', color: 'white', fontSize: 'calc( (100vh / 1080)*28 )', fontWeight: 'bold' }}>Google+</span>
                    </div>
                    <div className='border mt-3' style={ HollowBtnStyle }>
                        <img src={FacebookLogo} className="mx-4" style={{ width: 'calc( (100vh / 1080)*18 )', height: 'auto' }}/>
                        <span style={{ fontFamily: 'helvetica', fontWeight: 'bold', color: 'white', fontSize: 'calc( (100vh / 1080)*28 )' }}>Facebook</span>
                    </div>
                    <div className="mt-4" style={{ fontFamily: 'gotham-light', fontSize: 'calc( (100vh / 1080)*18 )', color: 'white' }}>
                        By clicking log in, you agree to our
                        <span style={{ fontFamily: 'gotham-bold' }}> Privacy</span>
                    </div>
                    <div style={{ fontFamily: 'gotham-light', fontSize: 'calc( (100vh / 1080)*18 )', color: 'white', marginTop: 'calc( -1*(100vh / 1080)*5 )' }}>
                        <span style={{ fontFamily: 'gotham-bold' }}>Policy</span> and <span style={{ fontFamily: 'gotham-bold' }}>Terms of Service</span>
                    </div>
                </div>
            </div>);
    }
}

export default LauncherWindow;