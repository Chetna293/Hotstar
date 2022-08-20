import React,{Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">     
                    <div class="menubtn">
                        <img src="https://img.icons8.com/sf-black/64/FFFFFF/menu.png"/>
                    </div>
                    <div id="icon">
                        <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="Disney"/>
                    </div>
                    <div class="navbar-collapse collapse" id="edunav">
                        <ul class="nav navbar-nav">
                            <li><a href="">TV</a>
                                <ul>
                                    <li><a href="">Other Shows</a></li>
                                    <li><a href="">Hotstar Special</a></li>
                                    <li><a href="">Quix</a></li>
                                    <li><a href="">Star Jalsha</a></li>
                                    <li><a href="">Star Plus</a></li>
                                    <li><a href="">Star Vijay</a></li>
                                    <li><a href="">Star Bharat</a></li>
                                    <li><a href="">Asianet</a></li>
                                    <li><a href="">More...</a></li>
                                </ul>   
                            </li>
                            <li><a href="">Movies</a>
                                <ul>
                                    <li><a href="">Hindi</a></li>
                                    <li><a href="">Telgu</a></li>
                                    <li><a href="">Malyalam</a></li>
                                    <li><a href="">Marathi</a></li>
                                    <li><a href="">Gujarati</a></li>
                                    <li><a href="">Bangoli</a></li>
                                    <li><a href="">English</a></li>
                                </ul>
                            </li>
                            <li><a href="">Sports</a>
                                <ul>
                                    <li><a href="">Cricket</a></li>
                                    <li><a href="">Football</a></li>
                                    <li><a href="">Formula 1</a></li>
                                    <li><a href="">Kabaddi</a></li>
                                    <li><a href="">Hockey</a></li>
                                    <li><a href="">Formula E</a></li>
                                    <li><a href="">Khelo India</a></li>
                                    <li><a href="">Tennis</a></li>
                                </ul>
                            </li>
                            <li><a href="">Disney+</a></li>
                        </ul>
                        <div class="search-container right-element">
                            <input class type="search" placeholder="Search" id="searchField" autocomplete="off" value />
                            <div class="searchIcon">
                                <i class="search-icon"></i>
                            </div>
                        </div>
                        <div class="login">
                            <button type="button" historyparams="[object][object]" class="subscribe-btn right-element">Subscribe</button>
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="">
                                    LOGIN
                                </a></li>
                            </ul>
                        </div>
                        <div class="geo-location">
                            <div id="geo-icon">
                                <img src="https://openweathermap.org/img/w/01d.png" alt id="imG" />
                                <span id="temp-here">
                                    <span class="temp-display">32.8</span>
                                    °C
                                    </span>
                                    <span id="location">
                                        <span class="temp-display">Nagpur</span>
                                        <i class="bi bi-geo-alt-fill"></i>
                                    </span>  
                            </div>
                        </div>      
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;