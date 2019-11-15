import React from 'react';
import './Sidebar.css'


class Sidebar extends React.Component{
    static defaultProps = {
        filters: [ "All", "Portrait","Mountains","City","Animals", 'River'] 
    }
    render(){
        return(
            <div className="Sidebar-container">
                <h1 className="Sidebar-heading"><span className="Sidebar-heading-1">Random</span><br />Gallery</h1>
                <ol className="Sidebar-list">
                    {this.props.filters.map(i=>{
                        return <li class="Sidebar-list-item" onClick={this.props.onClick} id={i}>{i}</li>
                    })}
                </ol>
                <p className="Sidebar-text">
                    Refresh the browser for new images
                </p>
            </div>
        )
    }
}

export default Sidebar;
