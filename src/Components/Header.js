import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './Header.css'

class Header extends Component {

    render() {
        return (
            <div className={'Main'}>
                <div className={'Label-left'}>
                    <div className={'Square-left'}>

                    </div>
                    <div className={'Text-left'}>
                        <NavLink to="#">Первомайская</NavLink>
                    </div>
                </div>
                <ul className={'Main-text'}>
                    <li><NavLink onClick={this.props.showMain} className={'NavLink-header'} to="/">о комплексе</NavLink></li>
                    <li><NavLink onClick={this.props.hiddenMain} className={'NavLink-header'} to="/design" >особенности</NavLink></li>
                    <li><NavLink onClick={this.props.hiddenMain} className={'NavLink-header'} to="/penthouses">пентхаусы</NavLink></li>
                    <li><NavLink onClick={this.props.hiddenMain} className={'NavLink-header'} to="/apartments">выбрать квартиру</NavLink></li>
                </ul>
                <div className="Label-right">
                    <div className="Text-right">
                        <NavLink to="#">8 888 888 88 88</NavLink>
                    </div>
                    <div className="Square-right">
                        <svg className={'Svg'} width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.998047 26.5521L26.5556 0.994995L28.005 2.44425L2.44665 28.0015L0.998047 26.5521ZM12.9987 26.5521L26.5556 12.9956L28.005 14.4435L14.4474 28.0015L12.9987 26.5521ZM14.5569 0.994995L0.998047 14.5532L2.44665 16.0009L16.0042 2.44425L14.5569 0.994995Z" fill="#F0F0F0"/>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
