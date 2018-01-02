import React from 'react';

import {styles} from '../helpers/styles';


export class Slider extends React.Component{
   
   handleChange(e){
       console.log(e.target.value);
   }
   
    render()
    {
        return (
            <input type='range' 
            min='0'
            max='1'
            step='0.01'
            className='volumeSlider'
            defaultValue='0.5'
            onChange={this.props.handleVolume}
            />
        );
    }
}