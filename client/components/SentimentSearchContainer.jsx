import React from 'react';

// import components
import Sentiment from './Sentiment.jsx';
import SearchContainer from './SearchContainer.jsx';
import Dropdown from './Dropdown.jsx';
// import css
import './../styling/Sentiment.css';
import './../styling/SentimentSearchContainer.css';
import 'animate.css';

class SentimentSearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addClass: false
        };
        this.logIt = this.logIt.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    logIt() {
        return console.log('haris');
    }
    toggle() {
        console.log('invoked...');
        this.setState({
            addClass: !this.state.addClass
        });
      }
    render() {
        console.log('THIS PROPS IN SENT SERCH IS:', this.props);
        let classes = ['main'];
        if (this.state.addClass) {
            classes.push('move');
        }
        return (
            <div id='SentimentSearchContainer'>
                <Sentiment classes={classes.join(' ')} clickMe={this.toggle}></Sentiment>
                {/* <SearchContainer updateState={this.props.updateState} data={this.props.data}></SearchContainer> */}
                <SearchContainer moveTrue={this.props.moveTrue} isLoading={this.props.isLoading} move={this.props.move} toggleSelected={this.props.toggleSelected} dropDown={this.props.dropDown} toggleSelected={this.props.toggleSelected} dropDown={this.props.dropDown} updateState={this.props.updateState} ></SearchContainer>
                {/* <Dropdown toggleSelected={this.props.toggleSelected} title="Query" dropDown={this.props.dropDown} ></Dropdown> */}
            </div>
        )
    }
}

export default SentimentSearchContainer;