import styled from "styled-components";
// import {Link} from 'react-router-dom'
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
const Singdesign = styled.div`
  width: 100%;
  height: 140px;
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #f857a6 0%, #ff5858 100%);
  border-radius: 0px 0px 100%;
`;
const Signcont = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 15px;
  /* border-left: 2px solid #ff5858; */
  /* background-image: linear-gradient(62deg, #f857a6 0%, #ffb641 100%); */
  background-image: linear-gradient(62deg, #6441a5 0%, #420a70 100%);
  box-shadow: 0 7px 7px 0 rgba(0, 0, 0, 0.24), 0 7px 10px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 20px;
  position: relative;
  border-radius: 7px;
  /* 
  &:before {
    content: "";

    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.8;
    background-color: #4158d0;
    background-image: linear-gradient(
      270deg,
      #035bcf 0%,
      #035bcf 50%,
      #dd8007 0%
    );

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    z-index: -1;
  } */
`;
const Signheader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  color: black;
`;
const Signlogo = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 100%;
`;
const Signh = styled.h2`
  color: #fff;
  font-family: Verdana, Geneva;
`;
const Signp = styled.p<{ error: boolean } | any>`
  font-family: "Bungee", cursive;
  //font-size: clamp(.8rem,1.1rem, 1.1rem);
  color: ${(props) => (props.error ? "red" : "white")};
  font-weight: ${(props) => (props.error ? 600 : 100)};
  font-size: ${(props) => (props.error ? "1.4rem" : "1.1rem")};
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
const Signinputgroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  position: relative;
`;

const Signfooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  width: 100%;
`;
const Signbtn = styled.button`
  width: 70%;
  padding: 10px;
  margin: 15px;
  border: none;
  cursor: pointer;
  transition: all 0.6s ease-in;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  background-image: linear-gradient(
    to left,
    #f857a6,
    #e2a138,
    #f857a6,
    #e2a138
  );
  background-size: 300% 100%;
  &:hover {
    background-position: 100% 0;
    transition: all 0.4s ease-in-out;
    background-image: linear-gradient(
      to left,
      #ffb641,
      #f857a6,
      #ffb641,
      #f857a6
    );
    box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4);

    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;
const Signiteminput = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

// const Signlink=styled(Link)`
// padding:10px;
// text-decoration: none;
// color:rgb(210, 226, 231);
// transition: all 0.4s ease-in-out;
// &:hover{

//     color: rgb(125, 193, 214);
// }
// `
const styles = {
  root: {
    borderBottom: "solid 1px #fff",
    padding: "3px",
    marginTop: "13px",
  },
  input: {
    color: "white",
  },
};

export {
  Parent,
  Signcont,
  Signheader,
  Signlogo,
  Signh,
  Signp,
  Signinputgroup,
  Signfooter,
  Signbtn,
  styles,
  Signiteminput,
  Singdesign,
};
