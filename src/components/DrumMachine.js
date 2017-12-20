import React from 'react';

import {ButtonContainer} from '../containers/ButtonContainer';

import {styles} from '../helpers/styles';

export class DrumMachine extends React.Component{
  



constructor(props)
{
    super(props);
    
    this.state = {
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
    this.setState({buttonPress: event.key.toUpperCase()});
}

  
  
    render(){
        return (
            <div id='drum-machine'
                style={styles.DrumMachine}>

            <h1>Hi HO!</h1>
            <ButtonContainer 
                letter='B'
                powerOn={true}
                buttonPress={this.state.buttonPress}/>
           

<ButtonContainer 
letter='P'
powerOn={true}
buttonPress={this.state.buttonPress}/>
</div>


        );
    }
}