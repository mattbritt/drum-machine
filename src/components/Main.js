import React from 'react';

import {DrumMachine} from '../components/DrumMachine';

import {styles} from '../helpers/styles';

export class Main extends React.Component{
    render(){
        return (
            <div id='Main'
                style={styles.Main}>
                <DrumMachine />
            </div>
        )
    }
}