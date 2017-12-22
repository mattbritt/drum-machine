import React from 'react';

import {styles} from '../helpers/styles';

export class Display extends React.Component{
    render(){

        return (

            <div style={styles.Display}>
                {this.props.text}
            </div>
        );
    }
}