import React, {Component} from 'react';
import Header from './Components/Header'
import './App.css';
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import './Gilroy-ExtraBold.otf'
import './Gilroy-Light.otf'
import ContainerOne from "./Components/Container-one";
import {Route, BrowserRouter} from "react-router-dom";
import ContainerThree from "./Components/Container-three";
import ContainerTwo from "./Components/Container-two";
import ContainerFive from "./Components/Container-five";
import ContainerFour from "./Components/Container-four";
import ContainerSix from "./Components/Container-six";
import ContentBlock from "./Components/Content-block/Content-block";
import ContentBlockTwo from "./Components/Content-block/Content-block-two";
import ContentBlockThree from "./Components/Content-block/Content-block-three";

class App extends Component {

    state = {
        divStyleShow: {
            display: 'flex',
        },
        divStyleHidden: {
            display: 'none'
        },
        toggle: true
    }

    hiddenSidebar = () => {
        this.setState({
                toggle: false
            }
        )
    }

    showSidebar = () => {
        this.setState({
                toggle: true
            }
        )
    }

    render() {
        return (
            <BrowserRouter>
                <div className={'App'}>
                    <Header showMain={this.showSidebar.bind(this)} hiddenMain={this.hiddenSidebar.bind(this)}/>

                    <Route path="/design" exact component={ContentBlock}/>
                    <Route path="/penthouses" exact component={ContentBlockTwo}/>
                    <Route path="/apartments" exact component={ContentBlockThree}/>

                    <div className={'Main-container'}
                         style={
                             this.state.toggle ?
                                 this.state.divStyleShow : this.state.divStyleHidden
                         }>

                        <Sidebar/>
                        <Route path="/" exact component={ContainerOne}/>
                        <Route path="/beautification" exact component={ContainerTwo}/>
                        <Route path="/security" exact component={ContainerThree}/>
                        <Route path="/engineering" exact component={ContainerFour}/>
                        <Route path="/infrastructure" exact component={ContainerFive}/>
                        <Route path="/transport" exact component={ContainerSix} style={{display: 'none'}}/>
                    </div>

                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
