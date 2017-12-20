/*
    styles.js contains the styles object.
    The styles object has inline styling objects for 
    various components.

    This keeps styling in one, reusable place.
*/
let styles = {
    Main: {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:'100vw',
            height:'100vh',
            background:'#8d8d8d',
            padding:0,
            margin:0
        },

    DrumMachine: {
     
            display:'flex',
            justifyContent:'center',
            alignItems:'center',

            background:'#b3b3b3',

            borderStyle:'solid',
            borderWidth:7,
            borderColor:'#ffa500'
        },

        Button: {
            display:'flex',
            width:150,
            height:125,
            justifyContent:'center',
            alignItems:'center',

            fontWeight:'900',
            fontSize:'1.5em',
            
            borderRadius:5,
            boxShadow:'5px 5px 5px black',
            
            margin:10,
            // forces these to reset after button click
            marginTop:10,
            marginBottom:10,

            background:'#808080'
        }

};

// export so that styles is importable
module.exports = { styles };
