import React from 'react';
import './footer.css';

const Footer = (props) => {
    return(
        <div class="footer">
                <div class="footer-container">
                    <div class="footer-left col-xs-12 col-sm-12 col-sm-7">
                        <ul>
                            <li><a href="">About Disney+ Hotstar</a></li>
                            <li><a href="">Terms of Use</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Feedback</a></li>
                            <li><a href="">Careers</a></li>
                        </ul>
                        <span class="copyright">© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</span>
                    </div> 
                    <div class="footer-right col-xs-12 col-sm-12 col-sm-5">
                        <div class="social-unit col-xs-4">
                            <div>
                                <span>Connect with us</span>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <img src="fblogo.png" alt="fb" class="slogo"/>
                                </a>
                                <a href="https://www.twitter.com/" target="_blank">
                                    <img src="twitterlogo.png" alt="twitter" class="slogo"/>
                                </a>
                            </div>
                        </div>
                        <div class="app-unit col-xs-8">
                                <h5>Disney+ Hotstar App</h5>
                                <a href="https://play.google.com/store/apps/details?id=in.startv.hotstar" target="_blank">
                                    <img src="googleplay1.png" alt="playstore" class="playstore"/>
                                </a>
                                <a href="https://itunes.apple.com/in/app/hotstar/id934459219?mt=8" target="_blank">
                                    <img src="appstore.png" alt="appstore" class="appstore"/>
                                </a>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
    )
}

export default Footer;