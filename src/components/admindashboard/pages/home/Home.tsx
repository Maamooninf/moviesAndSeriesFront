
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { GetActiveUsers } from "../../../../actions/Useractions";
import Chart from "../../Componentes/charts/Charts";
import FeaturedInfo from "../../Componentes/featuredInfo/FeaturedInfo";
import WidgetLg from "../../Componentes/Widgetlg/WidgetLg";
import "./Home.scss";
import {RootState} from '../../../../store'


  export default function AdminHome() {

    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(GetActiveUsers())

    },[dispatch])
    
  const activeusers=useSelector((state:RootState)=>state.ActiveUsers)
  const {users}=activeusers
  return (
    <div className="home">
      <FeaturedInfo  />
     {users&& <Chart data={users} title="User Analytics" grid dataKey="Active User"/>}
      {
      <div className="homeWidgets">
        <WidgetLg/>
      </div> }
    </div>  
  );
}