import { useEffect, useState } from 'react';
import VideoConent from '../components/Videocontent/VideoConent'
import Slidercont from '../components/Slidecontainer/Slidercont'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../actions/ListAction';
import { RootState } from '../store';
function Main() {
    const location = useLocation();
    const [genre,setgenre]=useState('comedy')
    const dispatch=useDispatch()
    const Listred=useSelector((state:RootState)=>state.getLists)
    const {lists}=Listred

    useEffect(()=> {
     dispatch(getList(location.pathname,genre))
     
       

         }, [dispatch,genre,location.pathname]);
    return (
        <div style={{display:'flex',flexDirection:'column',overflowX:'hidden' }} >
            <VideoConent type={location.pathname} setgenre={setgenre}  />

            {
                lists &&lists.map((element:any)=>{
                    return (
                        <div key={element._id}>
                    <Slidercont  list={element}/>
                    </div>
                    )
                })

            }
      
        </div>
    )
}

export default Main
