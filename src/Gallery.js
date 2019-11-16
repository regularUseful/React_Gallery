import React from 'react';
import Sidebar from './Sidebar'
import './Gallery.css'



class Gallery extends React.Component{
    static defaultProps = {
        photoObjectArray: [
            {className: "City" , src: "https://source.unsplash.com/900x1600/?new-york" },
            {className: "Animals" , src: "https://source.unsplash.com/900x1600/?animal" },
            {className: "Animals" , src: "https://source.unsplash.com/900x1600/?dog" },
            {className: "Animals" , src: "https://source.unsplash.com/900x1600/?monkey" },
            {className: "Portrait" , src: "https://source.unsplash.com/900x1600/?portrait" },
            {className: "Animals" , src: "https://source.unsplash.com/900x1600/?pig" },
            {className: "Portrait" , src: "https://source.unsplash.com/900x1600/?person" },
            {className: "Animals" , src: "https://source.unsplash.com/900x1600/?frog" },
            {className: "Animals" , src: "https://source.unsplash.com/900x1600/?bird" },
            {className: "River" , src: "https://source.unsplash.com/900x1600/?murry-river" },
            {className: "Mountains" , src: "https://source.unsplash.com/900x1600/?mountain" },
            {className: "River" , src: "https://source.unsplash.com/900x1600/?river" },
            {className: "City" , src: "https://source.unsplash.com/900x1600/?city" },
            {className: "City" , src: "https://source.unsplash.com/900x1600/?tower" },
            {className: "City" , src: "https://source.unsplash.com/900x1600/?skyscraper" },
            {className: "River" , src: "https://source.unsplash.com/900x1600/?flowing-river" },
            {className: "Mountains" , src: "https://source.unsplash.com/900x1600/?mt-fuji" },
            {className: "Animals" , src: "https://source.unsplash.com/900x1600/?goat" },
            {className: "Portrait" , src: "https://source.unsplash.com/900x1600/?face" },
            {className: "Animals" , src: "https://source.unsplash.com/900x1600/?sheep" },
    ]
    }

    constructor(props){
        super(props);
        this.state = {
            filter: "",
            modal: false,
            modalImg: "",
        }
        this.imgFilter = this.imgFilter.bind(this);
        this.modal = this.modal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    imgFilter(e){
        this.setState({
            filter: e.target.id
        })
    }

    modal(e){
        console.log(e.target.src)
        this.setState({
            modal: true,
            modalImg: e.target.src
        })
    }

    closeModal(){
        this.setState({
            modal: false
        })
    }

  
    render(){
        let filterVal= this.state.filter;
        let modal = this.state.modal;
        let modalUrl = this.state.modalImg;
        let closeModal = this.closeModal;
        function modalCheck(){
            if(modal === true){
                console.log(modalUrl);
                return(
                    <div className="modal">
                        <img className="modalImg" src={modalUrl} />
                        <button onClick={closeModal}>Close</button>
                    </div>
                )
            }
        }

        return(
            <div>
                <Sidebar onClick={this.imgFilter} />
                {modalCheck()}
                <div className="Gallery-container">
                    {
                    this.props.photoObjectArray.filter(function(i){ 
                        if(filterVal !== "All" && filterVal !== ""){ 
                            return i.className === filterVal}
                        else{
                            return i
                    } }).map(i=>{
                        return(
                            <div  onClick={this.modal} className="Gallery-Photo-container">
                                <img src={i.src}  />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Gallery;
