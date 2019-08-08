import React from 'react';
import { trackPromise } from 'react-promise-tracker';
// import components
import Dropdown from './Dropdown.jsx';
// import css
import './../styling/SearchText.css';
import 'animate.css';

class SearchText extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    search(event) {
        this.props.moveTrue();
        // console.log('keyed up');
        console.log('E.TARGET.VALUE = ' + event.target.value)
            if (event.defaultPrevented) {
                return;
            }
            var key = event.key || event.keyCode;
            if (key === 'Enter') {
                // this.props.moveTrue();
                trackPromise(
                fetch('/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        queryString: event.target.value
                    })
                }).then(function(response) {
                    return response.json();
                }).then(response => {
                    // console.log('response inside of searchText PROMISE:', response);
                    this.props.move();
                    this.props.updateState(response);
                    return;
                })
                // .then(response => this.props.move())
                .catch(err => console.log('there was an err in SearchText.jsx', err))
                )
            }
        console.log('Logging data...');
    }
    render() {
        console.log('PROPS INS SEARCCHCHH TEXRTTTTT', this.props);
        return (
                <div id='SearchText'>
                    <Dropdown toggleSelected={this.props.toggleSelected} title="Query" dropDown={this.props.dropDown} ></Dropdown>
                    <input type='text' autocomplete = 'off'placeholder='Enter a search item...' id='Input' onKeyUp={this.search}/>
                </div>
        )
    }
}

export default SearchText;
