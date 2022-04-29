import { makeStyles, Theme} from '@material-ui/core/styles';

// all the properties can be  optinal

import Props from '../interfaces/buttonProps'


const useStyles = makeStyles<Theme,Props>(
    {
      
      '@keyframes glitch':{
       "0%":{
         clipPath: "inset(80% -6px 0 0)",
         transform: "translate(-20px, -10px)"
       },
       "10%": {
         clipPath:"inset(10% -6px 85% 0)",
         transform: "translate(10px, 10px)"
       },
      "20%":{
         clipPath: "inset(80% -6px 0 0)",
         transform: "translate(-10px, 10px)"
       },
       "30%": {
         clipPath: "inset(10% -6px 85% 0)",
         transform: "translate(0px, 5px)",
       },
       "40%":{
         clipPath: "inset(50% -6px 30% 0)",
         transform: "translate(-5px, 0px)",
       },
       "50%": {
         clipPath: "inset(10% -6px 85% 0)",
         transform: "translate(5px, 0px)",
       },
       "60%": {
         clipPath:"inset(40% -6px 43% 0)",
         transform: "translate(5px, 10px)",
       },
       "70%":{
         clipPath:"inset(50% -6px 30% 0)",
         transform: "translate(-10px, 10px)",
       },
       "80%": {
         clipPath:"inset(80% -6px 5% 0)",
         transform: "translate(20px, -10px)",
       },
       "90%": {
         clipPath: "inset(80% -6px 0 0)",
         transform: "translate(-10px, 0px)",
       },
       "100%":{
         clipPath:"var(--slice-1)",
         transform: "translate(0)",
       }
      }


,
       
        // buttonCliped
        thirdstyle:{
         
          width: props=>props.option.width?props.option.width:'100%',

          height: props=>props.option.height?props.option.height:'auto', 

          fontSize: "1.2rem",

          fontFamily: "'Bebas Neue', cursive",

          background: props=>props.option.backgroundColor?props.option.backgroundColor:`linear-gradient(45deg, transparent 5%, red 5%)`,

          border: "0",

          color:props=>props.option.color?props.option.color:'red',

          letterSpacing: "3px",

          lineHeight: "48px",

      

          outline: "transparent",

          position:"relative",


       '&::after':{
            content: "'changed'",
            display: "block",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: "linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #00E6F6 5%)",
            textShadow: "-3px -3px 0px #F8F005, 3px 3px 0px #00E6F6",
            clipPath: "inset(50% 50% 50% 50%)",

       }
       ,
          '&:hover:after':{
            animation: " $glitch 1000ms",
            animationTimingFunction:"steps(2, end)",
          
          }
      },
      
       
     
    }
       
    
)

export {useStyles}