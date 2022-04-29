import {FC} from 'react'
import Button from '@material-ui/core/Button';
import {useStyles} from './ButtonStyle';
import Props from '../interfaces/buttonProps'
const Buttoncliped:FC<Props>=(props) =>{
    const {thirdstyle} = useStyles(props);
    return ( 
        <div>
            <Button  variant="text" className={`${thirdstyle} `} onClick={props.onClick}>
             {props.option&&props.option.text?props.option.text:'click me'}
            </Button>
        </div>
    ) 
    
}

export default Buttoncliped
