

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
    },
    { 
        letter: 'W',
        number: '8',
        kit1:{
            name:'Heater 2',
            sound:new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
             },
        kit2:{
            name:'Chord 2',
            soundUrl:'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
            }
    },
    { 
        letter: 'E',
        number: '9',
        kit1:{
            name:'Heater 3',
            sound:new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')
             },
        kit2:{
            name:'Chord 3',
            soundUrl:'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
            }
    },
    { 
        letter: 'A',
        number: '4',
        kit1:{
            name:'Heater 4',
            sound:new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')
             },
        kit2:{
            name:'Shaker',
            soundUrl:'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
            }
    },
    { 
        letter: 'S',
        number: '5',
        kit1:{
            name:'Clap',
            sound:new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')
             },
        kit2:{
            name:'Open HH',
            soundUrl:'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
            }
    },
    { 
        letter: 'D',
        number: '6',
        kit1:{
            name:'Open HH',
            sound:new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')
             },
        kit2:{
            name:'Closed HH',
            soundUrl:'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
            }
    },
    { 
        letter: 'Z',
        number: '1',
        kit1:{
            name:"Kick n' Hat",
            sound:new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')
             },
        kit2:{
            name:'Punchy Kick',
            soundUrl:'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
            }
    },
    { 
        letter: 'X',
        number: '2',
        kit1:{
            name:'Kick',
            sound:new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')
             },
        kit2:{
            name:'Side Stick',
            soundUrl:'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
            }
    },
    { 
        letter: 'C',
        number: '3',
        kit1:{
            name:'Closed HH',
            sound:new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')
             },
        kit2:{
            name:'Snare',
            soundUrl:'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
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

    this.playSound = this.playSound.bind(this);
}

componentDidMount(){
    window.addEventListener("keypress", this.handleKeyPress.bind(this));
}

componentWillUnmount(){
    window.removeEventListener("keypress", this.handleKeyPress.bind(this));
}

handleKeyPress(event){

    let thisKey = event.key.toUpperCase();

    this.playSound(thisKey);


}



playSound(letter){
// find right sound and text for given key press
    // search for letter/number in buttonObjs array    
    let aud;

    for(let i = 0; i < buttonObjs.length; i++)
    {
        // if letter/number found then clone Audio into aud and break loop
        if(buttonObjs[i].letter === letter
        || buttonObjs[i].number === letter)
        {
            aud = buttonObjs[i].kit1.sound.cloneNode();
            break;
        }
    }
    // Note: clone object so that multiple sounds can play at once

    // if aud not defined means letter/number not found
    if(aud === undefined)
    {
        return;
    }

    // play sound
    aud.play();

    // update state to trigger 'animation'
    this.setState({buttonPress: letter});
}

 
    render(){

        return (
            <div id='drum-machine'
                style={styles.DrumMachine}>
              
              <div style={styles.logoDiv}>
                <h2 style={styles.logo}><strong>
                FCC<i className="fa fa-free-code-camp"></i></strong></h2>
              </div>

                <div style={styles.pad}>  
                    {buttonObjs.map(buttonObj => 
                    <ButtonContainer id={buttonObj.letter}
                        key={buttonObj.letter}
                        buttonObj={buttonObj} 
                        powerOn={this.state.powerOn}
                        bank={this.state.bank}
                        buttonPress={this.state.buttonPress}
                        playSound={this.playSound}/>)}
                </div>
            </div>



        );
    }
}