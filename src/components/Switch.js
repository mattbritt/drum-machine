import React from 'react';

import {styles} from '../helpers/styles';

export class Switch extends React.Component{

render(){

let switchPos = {};

if(this.props.set === true)
{
    switchPos = {justifyContent:'flex-end'};
}
else
{
    switchPos = {justifyContent:'flex-start'};
}

    return (
        <div style={styles.switchDiv}>
            <h3 style={styles.switchH3}>{this.props.name}</h3>
            <div id='switchBox' 
                style={{...styles.switchBox,...switchPos}}
                onClick={this.props.handleClick}>

                <div id='switch' style={styles.switch}>
            
                </div>
            </div>
        </div>
    );

}

}