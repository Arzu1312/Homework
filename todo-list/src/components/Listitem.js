import React, { Component } from 'react'

class Listitem extends Component {
     
    onRemove = () => {
     setTimeout(()=> {
        this.props.handleDelete();
     }, 500)
    }

    render() {
        const {item, handleDelete}=this.props;
        return (
            <li>{item}
            <div className="row">
            <i className="fa fa-trash" 
            title="delete"
            onClick={this.onRemove}/>

            </div>
            </li>
        )
    }
}

export default Listitem
