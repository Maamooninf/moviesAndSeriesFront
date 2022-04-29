import React from 'react'
interface Props {
   
    option:{
        text:string;
        color: string;
        backgroundColor:string;
        height:string;
        width:string;
        },
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  };
  export default Props