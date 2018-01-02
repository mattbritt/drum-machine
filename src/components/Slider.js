import React from 'react';

import {styles} from '../helpers/styles';


export class Slider extends React.Component{
    render()
    {
        return (
            <input type='range' 
            className='volumeSlider'
            />
        );
    }
}