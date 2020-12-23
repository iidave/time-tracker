import React from 'react';
import "./Container.css";
import InputHd from './InputHd';
import Card from './Card'


const Container = () => {
        return (
            <div className = 'container'> {/* Keep Container css */}
                <InputHd className = "z-999"/>
                <Card />
                <Card className = "z-0"/>
                <Card className = "z-0"/>
            </div>
        );
    }

export default Container;