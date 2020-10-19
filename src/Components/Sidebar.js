import React, {Component} from 'react';
import './Sidebar.css'
import {NavLink} from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div className={'Sidebar'}>
                <ul>
                    <li><NavLink className={'NavLink-one'} to="/">Архитектура</NavLink></li>
                    <li><NavLink className={'NavLink-two'} to="/beautification">Благоустройство</NavLink></li>
                    <li><NavLink className={'NavLink-three'} to="/security">Безопастность</NavLink></li>
                    <li><NavLink className={'NavLink-four'} to="/engineering">Инженерия</NavLink></li>
                    <li><NavLink className={'NavLink-five'} to="/infrastructure">Инфраструктура</NavLink></li>
                    <li><NavLink className={'NavLink-six'} to="/transport">Tранспортная доступность</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;