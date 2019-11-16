import React from 'react';
import './Sidebar.css'


class Sidebar extends React.Component{
    static defaultProps = {
        filters: [ "All", "Portrait","Mountains","City","Animals", 'River'] 
    }
    constructor(props){
        super(props);
        this.state={
            windowWidth: window.innerWidth,
            dropDownHeight: "0px"
        }
        this.updateSize = this.updateSize.bind(this);
        this.updateDropdownHeight = this.updateDropdownHeight.bind(this)
    }

    updateSize(){
        this.setState({
            windowWidth: window.innerWidth
        })
    }

    updateDropdownHeight(){
        if(this.state.dropDownHeight === "0px"){
            this.setState({
                dropDownHeight: "150px"
            })
        }
        else{
            this.setState({
                dropDownHeight: "0px"
            })
        }
    }

    componentDidMount(){
        window.addEventListener('resize', this.updateSize)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateSize)
    }

    render(){
        let {windowWidth, dropDownHeight} = this.state
        let {filters, onClick} = this.props
        let updateDropdown = this.updateDropdownHeight
        let dropdownStyle = {
            height: dropDownHeight
        }
        function windowCheck(){
            if(windowWidth < 580){
                return(
                    <div className="Sidebar-dropdown-container">
                        <i onClick={updateDropdown} className="fas fa-bars"></i>
                        <div style={dropdownStyle} className="Sidebar-dropdown">
                            <ol className="Sidebar-list">
                        {filters.map(i=>{
                            return <li className="Sidebar-list-item" onClick={onClick} id={i}>{i}</li>
                        })}
                            </ol>
                        </div>
                    </div>
                )
            }
            else{
                return(
                    <ol className="Sidebar-list">
                    {filters.map(i=>{
                        return <li className="Sidebar-list-item" onClick={onClick} id={i}>{i}</li>
                    })}
                    </ol>
                )
            }
       }
        return(
            <div className="Sidebar-container">
                <h1 className="Sidebar-heading"><span className="Sidebar-heading-1">Random</span><br />Gallery</h1>
                
                {windowCheck()}
                
                
                {/*
                <ol className="Sidebar-list">
                    {this.props.filters.map(i=>{
                        return <li className="Sidebar-list-item" onClick={this.props.onClick} id={i}>{i}</li>
                    })}
                </ol> */}
                <p className="Sidebar-text">
                    Refresh the browser for new images
                </p>
            </div>
        )
    }
}

export default Sidebar;
