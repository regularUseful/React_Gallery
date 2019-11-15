import React from 'react';
import './Sidebar.css'


class Sidebar extends React.Component{
    static defaultProps = {
        filters: [ "Portrait","Mountains","City","Animals", 'River'] 
    }
    render(){
        return(
            <div className="Sidebar-container">
                <h1>Photos</h1>
                <ol>
                    {this.props.filters.map(i=>{
                        return <li onClick={this.props.onClick} id={i}>{i}</li>
                    })}
                </ol>
            </div>
        )
    }
}

export default Sidebar;
