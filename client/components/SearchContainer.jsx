import React from 'react';

// import components
import Dropdown from './Dropdown.jsx';

// import css
import './../styling/SearchContainer.css';
import 'animate.css';
import Search from './Search.jsx';

class SearchContainer extends React.Component {
   
    render() {
        console.log('THIS PROPS IN SERCH CONTAINER IS:', this.props);
        return (
            <div id='SearchContainer' className='animated heartBeat'>
                {/* <Dropdown toggleSelected={this.props.toggleSelected} title="Query" dropDown={this.props.dropDown} ></Dropdown> */}
                {/* <Search updateState={this.props.updateState} data={this.props.data}></Search> */}
                <Search toggleSelected={this.props.toggleSelected} dropDown={this.props.dropDown} dropDown={this.props.dropDown} updateState={this.props.updateState} ></Search>
            </div>
        )
    }
}

export default SearchContainer;
