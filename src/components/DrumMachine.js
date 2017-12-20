import React from 'react';

import {ButtonContainer} from '../containers/ButtonContainer';

import {styles} from '../helpers/styles';

export class DrumMachine extends React.Component{
  



constructor(props)
{
    super(props);
    
}

componentDidMount(){
    window.addEventListener("keypress", this.handleKeyPress.bind(this));
}

componentWillUnmount(){
    window.removeEventListener("keypress", this.handleKeyPress.bind(this));
}


  
  
    render(){
        return (
            <div id='drum-machine'
                style={styles.DrumMachine}>

            <h1>Hi HO!</h1>
            <ButtonContainer 
                letter='B'
                powerOn={true}/>
            </div>
        );
    }
}