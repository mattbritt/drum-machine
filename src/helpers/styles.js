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

            flexWrap:'wrap',
           
            background:'#b3b3b3',

            borderStyle:'solid',
            borderWidth:7,
            borderColor:'#ffa500'
        },

        pad: {
          
            width:'100%',
            
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems:'center',
        

            margin:0,
            padding:0

        },

        Button: {
            display:'flex',
            width:'25%',
            height:100,
            justifyContent:'center',
            alignItems:'center',
            flexShrink:'1',

            fontWeight:'900',
            fontSize:'1.5em',
            
            borderRadius:5,
            boxShadow:'5px 5px 5px black',
            
            margin:10,
            // forces these to reset after button click
            marginTop:10,
            marginBottom:10,

            background:'#808080'
        },

        logoDiv: {
            margin:0,
            padding:0,
            width:'100%',
            display:'flex',
            justifyContent:'flex-end'
        },

        logo: {
         
            margin:3,
            padding:3,
            fontStyle:'italic'
            
        }



};

// export so that styles is importable
module.exports = { styles };
