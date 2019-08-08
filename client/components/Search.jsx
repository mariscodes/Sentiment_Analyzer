import React from 'react';

// import components
import SearchText from './SearchText.jsx';
import Dropdown from './Dropdown.jsx';

//import css
import './../styling/Search.css';
import 'animate.css';

class Search extends React.Component {
    render() {
        return (
            <div id='Search'>
                {/* <Dropdown title="Query" dropDown={this.props.dropDown} ></Dropdown> */}
                {/* <SearchText updateState={this.props.updateState} data={this.props.data}></SearchText> */}
                <SearchText updateState={this.props.updateState} toggleSelected={this.props.toggleSelected} dropDown={this.props.dropDown} ></SearchText>
            </div>
        )
    }
}

export default Search;
