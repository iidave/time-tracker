import React, {Component} from 'react';
import "./Container.css";
import Header from './Header';
import Card from './Card'


class Container extends Component{
    render() {
        return (
            <div className = 'container'>
                <Header />
                <Card />
                <Card />
                <Card />
            </div>
        );
    }
}

export default Container;