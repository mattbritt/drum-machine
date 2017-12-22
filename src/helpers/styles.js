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
          
            width:'45%',
            minWidth:'340px',
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
            fontFamily:'Impact, Charcoal, sans-serif',
            fontStyle:'italic',
            fontWeight:'bolder'
            
        },

        controls: {
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',

              width:'45%',
              minWidth:'340px'
              //  height:500
        },

        switchDiv: {
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            padding:0,
            margin:0
        },

        switchH3: {
            padding:0,
            margin:0,
            justifyText:'center',
            fontWeight:'900'
        },


        switchBox: {
            display:'flex',
            alignItems:'center',
            background:'black',
            width:'75px',
            height:'25px',
            padding:5,
            margin:0

        },

        switch: {
            display:'flex',
            background:'blue',
            boxSizing:'border-box',
            width:'45%',
            height:'100%',
            alignSelf:'flex-end'
        },

        Display: {
            alignSelf:'center',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:60,
            width:'75%',
            background:'#808080',
            fontSize:30,
            fontWeight:900
        }



};

// export so that styles is importable
module.exports = { styles };
