import React, { Component } from 'react';
import Listitem from './Listitem';

class List extends Component {
    
    render() {
        const {todo, onDelete} = this.props;
        return (
            <ul>

                {
                    todo.map((item, index)=>{
                        return  <Listitem 
                         item={item.todo}
                         key={index}
                         handleDelete ={() => {onDelete(index)}} />
                    })
                }
           

        </ul>
        )
    }
}

export default List
