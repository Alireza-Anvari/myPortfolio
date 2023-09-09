import React from 'react'

import { FaHome,FaInfoCircle,FaReact } from "react-icons/fa";
import { MdContactPhone,MdMessage } from "react-icons/md";
const tabProps=(index)=>{
    return{
        id:`sidebarTab-${index}`,
        "aria-controls":`tabpanel-${index}`
    }

}
export const SidebarDataTabs=()=>{
    
const tabs=[
    {label:"صفحه اصلی",icon:<FaHome/>,...tabProps(0)},
    {label:" درباره من",icon:<FaInfoCircle/>,...tabProps(1)},
    {label:" نمونه کارها",icon:<FaReact/>,...tabProps(2)},
    {label:" نظرات دانشجویان",icon:<MdMessage/>,...tabProps(3)},
    {label:"  ارتباط با من",icon:<MdContactPhone/>,...tabProps(4)}
]
return tabs
}




