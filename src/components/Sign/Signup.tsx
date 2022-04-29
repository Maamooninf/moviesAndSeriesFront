import { useState ,FC} from 'react'
import {Parent,Signcont,Signheader,Signh,Signp,Signinputgroup,Signfooter,styles,Signiteminput} from './Signstyle' 
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Buttoncliped from '../Button/Buttoncliped';
import {optioncliped} from '../Button/ButtonOption'
import { rigister } from '../../actions/Useractions';
import { useDispatch,useSelector} from 'react-redux'
import { RootState } from '../../store';
import {ToastContainer } from 'react-toastify';
const Signup:FC<any>=(props)=> {
 

  const userRigister=useSelector((state:RootState)=>state.userRigister)
  const {err}=userRigister 

 




    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [confirmpassword,setconfpassword]=useState('')


    const {classes}=props

    const dispatch=useDispatch()


    const handlesubmitup=()=>{
      dispatch(rigister(name,password,email,confirmpassword))
   
          }
 
    return (
        <Parent>
             <ToastContainer  autoClose={2500}  />
    
            <Signcont>

                <Signheader>
                    <Signh>
                        Welcome
                    </Signh>
                    <Signp>
                        Sign up by entering the information below
                    </Signp>
                  
                </Signheader>

                <Signinputgroup>
                 
             <Signiteminput>
             {
               err && err.fields && err.fields.name&&
               <Signp error={true}>
               {err.messages.name}
               </Signp> 
               }

                <TextField label='name' 
                  InputProps={{
                    className: classes.input
                  }}
                  className={classes.root}
                   InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  onChange={(e)=>{setname(e.target.value)}}
                />
             </Signiteminput>
              
                
              
             <Signiteminput>

                  {
               err && err.fields && err.fields.email&&
               <Signp error={true}>
               {err.messages.email}
               </Signp> 
               }

                <TextField label='email' 
                  InputProps={{
                    className: classes.input
                  }}
                  className={classes.root}
                   InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  onChange={(e)=>{setemail(e.target.value)}}
                />
            </Signiteminput>

            <Signiteminput>
{
               err && err.fields && err.fields.password&&
          
               <Signp error={true}>
               {err.messages.password}
               </Signp> 
           
               }
                <TextField label='password' 
                   InputProps={{
                    className: classes.input,  endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                       
                         
                        >
                          {showPassword ? <Visibility  style={{color:'red'}} /> : <VisibilityOff style={{color:'red'}}/>}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                 
                   InputLabelProps={{
                    style: { color: '#fff' }
                  }}
                  className={classes.root}
                  type={showPassword ? "text" : "password"} 
                  onChange={(e)=>{setpassword(e.target.value)}}
                />
            </Signiteminput>

            <Signiteminput>
            
              {
               err && err.errpass&&
               <Signp error={true}>
               {err.errpass}
               </Signp> 
               }
                 <TextField label='confirm password' 
                   InputProps={{
                    className: classes.input
                  }}
                 
                   InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  className={classes.root}
                  type={showPassword ? "text" : "password"} 
                  onChange={(e)=>{setconfpassword(e.target.value)}}
                />
                </Signiteminput>
               
                </Signinputgroup>


                <Signfooter>

                <Buttoncliped option={optioncliped} onClick={handlesubmitup}/>
          
                </Signfooter>

            </Signcont>
            
        </Parent>
    )
}

export default withStyles(styles)(Signup)