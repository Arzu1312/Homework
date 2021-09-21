import React, { Component } from 'react';
import '../styles/style.css';


 class Search extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            keyword: ''
        }
    }
    
    onChange(e){
        this.setState({
            keyword: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.searchUsers(this.state.keyword);
    }


    render() {
        return (
            <div className="header-search">
                <div className="search">
                    <form className="search-form" onSubmit={this.onSubmit}>
                    <div class="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search or jump to..."  aria-describedby="button-addon2" onChange={this.onChange} />
                    <button className="btn btn-outline-secondary">Search</button>
                       </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Search



