import React from 'react';
import "./Container.css";
import Header from './Header';
import Card from './Card';
import CardClosed from './CardClosed';
import JobEntry from './JobEntry';


const Container = () => {
        return (
            <div className = 'container'> {/* Keep Container css */}
                <Header />
                {/* <JobEntry /> */}
                <Card />
                <CardClosed />
                
            </div>
        );
    }

export default Container;