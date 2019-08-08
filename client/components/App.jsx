import React from 'react';
// import ReactDOM from 'react-dom';

// import necessary components
// import Sentiment from './Sentiment.jsx';
import SentimentSearchContainer from './SentimentSearchContainer.jsx';
import Chart from './Chart.jsx';
import Footer from './Footer.jsx'
// import SearchContainer from './SearchContainer.jsx';

// import styling
import './../styling/App.css';
import 'animate.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            move_SentimentSearchContainer: false,
            dd_options: [
                {
                    id: 0,
                    title: 'Sentiment',
                    selected: false,
                    key: 'dd_options'
                },
                {
                    id: 1,
                    title: 'Frequency',
                    selected: false,
                    key: 'dd_options'
                }
            ],
            sentimentData: {
                data: { 
                    name: 'Sentiment Over Time',
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
                    datasets: [
                        {
                            label: 'Sentiment',
                            fill: true,
                            lineTension: 0.25,
                            backgroundColor: ['rgba(75,192,192,1)'],
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            // pointBackgroundColor: '#984B43',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,0.4)',
                            pointHoverBorderColor: 'rgba(75,192,192,0.4)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: new Array(140).fill(0),
                        }
                    ]
                },
            },
            frequencyData: {
                data: {
                    name: 'Frequency Over Time',
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
                    datasets: [
                        {
                            label: 'Frequency',
                            fill: true,
                            lineTension: 0.25,
                            backgroundColor: ['red'],
                            borderColor: 'red',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'red',
                            // pointBackgroundColor: '#984B43',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'green',
                            pointHoverBorderColor: 'purple',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: new Array(140).fill(0),
                        }
                    ]
                }
            },
            sentimentOptions: {
                options: {
                    title: {
                        display: true,
                        text: 'Sentiment of Words Over Time',
                        fontSize: 18,
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor:'white',
                                beginAtZero: false,
                                min: -10,
                                max: 20
                            },
                            gridLines: {
                                color: '#334449'
                            }
                        }],
                        xAxes:[
                            {
                                ticks:{
                                    maxTicksLimit: 12,
                                    autoSkip: true,
                                    fontColor:'white'
                                },
                                gridLines: {
                                    color: '#233237'
                                }
                            }
                        ]
                    },
                    // animation: {
                    //     duration: 2000,
                    //     onProgress: function(animation) {
                    //         progress.value = animation.currentStep / animation.numSteps;
                    //     },
                    //     onComplete: function(animation) {
                    //         window.setTimeout(function() {
                    //             progress.value = 0;
                    //         }, 2000);
                    //     }
                    // },
                }
            }, 
            frequencyOptions: {
                options: {
                    title: {
                        display: true,
                        text: 'Frequency of Words Over Time',
                        fontSize: 18,
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor:'white',
                                beginAtZero: false,
                                min: -20,
                                max: 300,
                            },
                            gridLines: {
                                color: '#334449'
                            }
                        }],
                        xAxes:[
                            {
                                ticks:{
                                    maxTicksLimit: 12,
                                    autoSkip: true,
                                    fontColor:'white'
                                },
                                gridLines: {
                                    color: '#233237'
                                }
                            }
                        ]
                    },
                    // animation: {
                    //     duration: 2000,
                    //     onProgress: function(animation) {
                    //         progress.value = animation.currentStep / animation.numSteps;
                    //     },
                    //     onComplete: function(animation) {
                    //         window.setTimeout(function() {
                    //             progress.value = 0;
                    //         }, 2000);
                    //     }
                    // },
                }         
            }
        }
        this.move = this.move.bind(this);
        this.update = this.update.bind(this);
        this.toggleSelected = this.toggleSelected.bind(this);
    }
    update(newData) {
        console.log('works1');
        this.setState((state)=>{
            let newState = {...state};
            console.log('newState INSIDE OF UPDATE AT TOP LEVEL APP: ', newState);
            // newState.data.labels = newData.labels;
            // newState.data.datasets[0].data = newData.sentimentData;
            // newState.data.datasets[1].data = newData.frequencyData;
            newState.sentimentData.data.labels = newData.labels;
            newState.frequencyData.data.labels = newData.labels;
            newState.sentimentData.data.datasets[0].data = newData.sentimentData;
            newState.frequencyData.data.datasets[0].data = newData.frequencyData;
            // console.log('UPDATED STATE ' + newState.data)
            return newState;
        })
        console.log('works');
    }
    move() {
        this.setState({
            move_SentimentSearchContainer: !move_SentimentSearchContainer
        });
    }
    toggleSelected(id, key) {
        let temp = this.state[key];
        temp[id].selected = !temp[id].selected;
        this.setState({
            [key]: temp
        })
    }
    render() {
        console.log('THIS SI THE STATE INSIDE TOP COMPOENNTN', this.state);
        // console.log('APP.JSX DATA' + this.state.data)
        let classes = [''];
        if (this.state.move_SentimentSearchContainer) {
            classes.push('.move_up');
        }
        return (
            <div id='App'>
                {/* <SentimentSearchContainer updateState={this.update} className={classes.join(' ')} onClick={this.move} data={this.state.data}></SentimentSearchContainer> */}
                <SentimentSearchContainer toggleSelected={this.props.toggleSelected} dropDown={this.props.dropDown} toggleSelected={this.toggleSelected} dropDown={this.state.dd_options} updateState={this.update} className={classes.join(' ')} onClick={this.move} ></SentimentSearchContainer>
                <Chart sentimentData={this.state.sentimentData} frequencyData={this.state.frequencyData} sentimentOptions={this.state.sentimentOptions} frequencyOptions={this.state.frequencyOptions} dd={this.state.dd_options} ></Chart>
                {/* <Chart sentimentData={this.state.sentimentData} frequencyData={this.state.frequencyData} sentimentOptions={this.state.sentimentOptions} frequencyOptions={this.state.frequencyOptions} ></Chart> */}
                {/* grab values associated with data */}
                {/* {console.log(this.state.data.datasets[0]['data'])} */}
                {/* grab values associated with labels */}
                {/* {console.log(this.state.data.labels)} */}
                <Footer/>
            </div>
        )
    }
}

export default App;
