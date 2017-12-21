import React from 'react';

import {Button} from '../components/Button';

import {styles} from '../helpers/styles.js';


export class ButtonContainer extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
            buttonStyle: styles.Button
        }

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick()
    {
        this.props.playSound(this.props.buttonObj.letter);
    }

    buttonPress(){

        // if power is on, do keypress animation and sound
        if(this.props.powerOn)
        {         
            // play sound
          
            
            var background = {...this.state.buttonStyle};
            background.background = '#ffa500';
            background.boxShadow = '';
            background.marginTop = 15;
            background.marginBottom = 5;
        
            this.setState({buttonStyle: background});

            setTimeout(function() {
                this.setState({buttonStyle: styles.Button});
            }.bind(this), 10);
        }
    }

    restoreButton()
    {
        this.setState({buttonStyle: styles.Button});
    }


    componentWillReceiveProps(nextProps){
    
        if(nextProps.buttonPress === this.props.buttonObj.letter  
        || nextProps.buttonPress === this.props.buttonObj.number)
        {
          
            this.buttonPress();
        }

    }
    
    render(){

        return (
            <Button 
            buttonStyle={this.state.buttonStyle}
            handleClick={this.handleClick}
            letter={this.props.buttonObj.letter}
            />
            
        );
    }
}