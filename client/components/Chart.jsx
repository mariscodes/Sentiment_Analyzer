import React from 'react';
import { Line, Pie, Bar, Doughnut, Bubble, Radar, } from 'react-chartjs-2';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

// import './chartrender.js';

// import components

// import css
import './../styling/Chart.css';
import 'animate.css';

// const data = {
    // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    // datasets: [
    //   {
    //     label: 'My First dataset',
    //     fill: false,
    //     lineTension: 0.1,
    //     backgroundColor: 'rgba(75,192,192,0.4)',
    //     borderColor: 'rgba(75,192,192,1)',
    //     borderCapStyle: 'butt',
    //     borderDash: [],
    //     borderDashOffset: 0.0,
    //     borderJoinStyle: 'miter',
    //     pointBorderColor: 'rgba(75,192,192,1)',
    //     pointBackgroundColor: '#fff',
    //     pointBorderWidth: 1,
    //     pointHoverRadius: 5,
    //     pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    //     pointHoverBorderColor: 'rgba(220,220,220,1)',
    //     pointHoverBorderWidth: 2,
    //     pointRadius: 1,
    //     pointHitRadius: 10,
    //     data: [65, 59, 80, 81, 56, 55, 40]
    //   }
    // ]
  // };
// const { promiseInProgress } = usePromiseTracker();
const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
    return (
        promiseInProgress &&
        <div
          style={{
            marginTop: '40px',
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Loader type="BallTriangle" color="#EAC67A" height="100" width="100" /> */}
          {/* <Loader type="Bars" color="#EAC67A" height="100" width="100" /> */}
          <Loader type="Bars" color="#EAC67A" height="100" width="100" />
        </div>
    );
}

class Chart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('THIS DROPS DD IN CHART IS:', this.props);
        // console.log('Das Data => ', this.props.sentimentData.data);
        // console.log('PROPDATA FOR CHART' +this.props.sentimentData.data.labels)
        if (this.props.dd[0].selected && this.props.dd[1].selected) {
            // this.props.move();
            if (this.props.isLoading) {
                // this.props.move();
                return (
                    <div>
                        <LoadingIndicator/>
                    </div>
                    )
            } else {
                return (
                    <div id='haris' class='animated fadeInUp'>
                        {/* <Line data = {this.props.data} options={this.props.options} width={1000} height={400} className='animate fadeIn'></Line> */}
                        <Line data = {this.props.sentimentData.data} options={this.props.sentimentOptions.options} width={1000} height={400} className='animate fadeIn'></Line>
                        <Line data = {this.props.frequencyData.data} options={this.props.frequencyOptions.options} width={1000} height={400} className='animate fadeIn'></Line>
                        {/* {console.log('das data => ', this.props.data)} */}
                    </div>
                )
            }
        } else if (this.props.dd[0].selected) {
            // this.props.move();
            if (this.props.isLoading) {
                // this.props.move();
                return (
                    <div>
                        <LoadingIndicator/>
                    </div>
                    )
            } else {
                return (
                    <div id='haris' class='animated fadeInUp'>
                        {/* <Line data = {this.props.data} options={this.props.options} width={1000} height={400} className='animate fadeIn'></Line> */}
                        <Line data = {this.props.sentimentData.data} options={this.props.sentimentOptions.options} width={1000} height={400} className='animate fadeIn'></Line>
                        {/* <Line data = {this.props.frequencyData.data} options={this.props.frequencyOptions.options} width={1000} height={400} className='animate fadeIn'></Line> */}
                        {/* {console.log('das data => ', this.props.data)} */}
                    </div>
                )
            }
        } else if (this.props.dd[1].selected) {
            // this.props.move();
            if (this.props.isLoading) {
                // this.props.move();
                return (
                <div>
                    <LoadingIndicator/>
                </div>
                )
            } else {
                return (
                    <div id='haris' class='animated fadeInUp'>
                        {/* <Line data = {this.props.data} options={this.props.options} width={1000} height={400} className='animate fadeIn'></Line> */}
                        {/* <Line data = {this.props.sentimentData.data} options={this.props.sentimentOptions.options} width={1000} height={400} className='animate fadeIn'></Line> */}
                        <Line data = {this.props.frequencyData.data} options={this.props.frequencyOptions.options} width={1000} height={400} className='animate fadeIn'></Line>
                        {/* {console.log('das data => ', this.props.data)} */}
                    </div>
                )
            }
        } else {
            return null;
        }
        // return (
        // <div>
        //     <LoadingIndicator/>
        // </div>
        // )
        // return (
        //     <div id='haris' class='animated fadeInUp'>
        //         {/* <Line data = {this.props.data} options={this.props.options} width={1000} height={400} className='animate fadeIn'></Line> */}
        //         <Line data = {this.props.sentimentData.data} options={this.props.sentimentOptions.options} width={1000} height={400} className='animate fadeIn'></Line>
        //         <Line data = {this.props.frequencyData.data} options={this.props.frequencyOptions.options} width={1000} height={400} className='animate fadeIn'></Line>
        //         {/* {console.log('das data => ', this.props.data)} */}
        //     </div>
        // )
    }
}

export default Chart;
