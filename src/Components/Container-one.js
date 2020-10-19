import React, {Component} from 'react';
import './Container-one.css'

class ContainerOne extends Component {
    render() {
        return (
            <div className={'Container-one'}>
                <div className={'Block-one'}>
                    <div className={'Block-center'}>
                        <div className={'Text-main'}>архитектура</div>
                        <p>Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный
                            стиль жизни</p>
                        <span>1/6</span>
                    </div>
                </div>
                <div className={'Picture-one'}>

                </div>
            </div>
        );
    }
}

export default ContainerOne;