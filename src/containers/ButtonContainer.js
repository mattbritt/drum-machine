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
        // if power is on, do keypress animation and sound
        if(this.props.powerOn)
        {           
            var background = {...this.state.buttonStyle};
            background.background = '#ffa500';
            background.boxShadow = '';
            background.marginTop = 15;
            background.marginBottom = 5;
        
            this.setState({buttonStyle: background});

            setTimeout(function() {
                this.setState({buttonStyle: styles.Button});
            }.bind(this), 80);
        }
    }

    restoreButton()
    {
        this.setState({buttonStyle: styles.Button});
    }


    componentWillReceiveProps(nextProps){
        console.log(this.props.buttonPress === this.props.letter)
        if(nextProps.buttonPress === this.props.letter){
          
            this.handleClick();
        }

    }
    
    render(){

        return (
            <Button 
            buttonStyle={this.state.buttonStyle}
            handleClick={this.handleClick}
            letter={this.props.letter}/>
            
        );
    }
}