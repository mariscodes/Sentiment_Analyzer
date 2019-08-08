import React from 'react';

// import components
import Dropdown from './Dropdown.jsx';
// import css
import './../styling/SearchText.css';
import 'animate.css';

class SearchText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
        this.search = this.search.bind(this);
    }
    search(event) {
        // console.log('keyed up');
        console.log('E.TARGET.VALUE = ' + event.target.value)
            if (event.defaultPrevented) {
                return;
            }
            var key = event.key || event.keyCode;
            if (key === 'Enter') {
                fetch('/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        queryString: event.target.value
                    })
                })
                .then(function(response) {
                    return response.json();
                })
                // use an arrow function to re-bind
                .then(response => {
                    console.log('response inside of searchText PROMISE:', response);
                    this.props.updateState(response)
                    return;
                })
        }
        console.log('Logging data...');
    }
    render() {
        return (
                <div id='SearchText'>
                    <Dropdown toggleSelected={this.props.toggleSelected} title="Query" dropDown={this.props.dropDown} ></Dropdown>
                    <input type='text' autocomplete = 'off'placeholder='Enter a search item...' id='Input' onKeyUp={this.search}/>
                </div>
        )
    }
}

export default SearchText;
