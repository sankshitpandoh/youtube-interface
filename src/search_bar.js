import React, {Component} from 'react';
import logo from './icon.png';


class SearchBar extends Component{
    constructor(){
        super ();

        this.state ={ term: ''};
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event)
    {
      this.setState({term: event.target.value});
    }

    handleGoClick (event) {
    this.props.onSearchTermChange(this.state);
    }


    render(){
      return(
        <div class="navbar">
        <a href="https://www.youtube.com">
        <img src={logo} width="100" height="50" align="left" />
        </a>
        <form onSubmit={e => e.preventDefault()}>
        <input onChange={this.handleSearch}
         value={this.state.term} />
        <button
            class="button"
            onClick={this.handleGoClick.bind(this)}>
            Search
        </button>
        </form>
        </div>
      );
    }
  }

export default SearchBar;
