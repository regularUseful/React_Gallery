import React from 'react';
import './Sidebar.css'


class Sidebar extends React.Component{
    static defaultProps = {
        filters: [ "Landscape","Portrait","Mountains","City","Animals"] 
    }
    render(){
        return(
            <div className="Sidebar-container">
                <h1>Photos</h1>
                <ul>
                    {this.props.filters.map(i=>{
                        return <li value={i}>{i}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Sidebar;
