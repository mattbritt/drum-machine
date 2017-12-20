import React from 'react';

//import {styles} from '../helpers/styles';


export class Button extends React.Component{
    render(){
        return (
            <div 
                style={this.props.buttonStyle}
                onClick={this.props.handleClick}>
                {this.props.letter}
            </div>
        );
    }
}