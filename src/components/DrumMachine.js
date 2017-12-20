import React from 'react';

import {ButtonContainer} from '../containers/ButtonContainer';

import {styles} from '../helpers/styles';


// sounds objects
let buttonObjs = [
    { 
        letter: 'Q',
        number: '7',
        kit1:{
            name:'Heater 1',
            sound:new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')
             },
        kit2:{
            name:'Chord 1',
            soundUrl:'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
            }

    }
];


export class DrumMachine extends React.Component{
  










constructor(props)
{
    super(props);
    
    this.state = {
        powerOn: true,
        bank: 1,
        buttonPress: ''
    };

}

componentDidMount(){
    window.addEventListener("keypress", this.handleKeyPress.bind(this));
}

componentWillUnmount(){
    window.removeEventListener("keypress", this.handleKeyPress.bind(this));
}

handleKeyPress(event){

    let thisKey = event.key.toUpperCase();

    // play sound
    for(let i = 0; i < buttonObjs.length; i++)
    {
        if(buttonObjs[i].letter === thisKey
        || buttonObjs[i].number === thisKey)
        {
            buttonObjs[i].kit1.sound.play();
        }
    }



    this.setState({buttonPress: thisKey});
}

  
  
    render(){

        let buttons = {};

        for(let i=0; i<buttonObjs.length; i++)
        {
            buttons += 
            <ButtonContainer
                buttonObj={buttonObjs[i]}
                powerOn={this.state.powerOn}
                bank={this.state.bank}
                buttonPress={this.state.buttonPress} />

        }
console.log(buttons);

        return (
            <div id='drum-machine'
                style={styles.DrumMachine}>
               
               {buttonObjs.map(buttonObj => 
            <ButtonContainer 
                buttonObj={buttonObj} 
                powerOn={this.state.powerOn}
                bank={this.state.bank}
                buttonPress={this.state.buttonPress}/>)}
            </div>



        );
    }
}