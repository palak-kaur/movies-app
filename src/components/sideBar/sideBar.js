import React from 'react'
import SideBarButtons from "../sideBarButtons/sideBarButtons"
import "./sideBar.css"


class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return  (
            <div className = "sideBar">
                <SideBarButtons text={"Action"} />
                <SideBarButtons text={"Romance"} />
            </div>
        )
    }
}

export default SideBar;