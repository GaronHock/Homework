import React from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date : new Date()};
    }

    tick(){
        // console.log('ticking');
        this.setState({ date: new Date() });   
    }

    componentDidMount(){
        this.interval = setInterval(this.tick.bind(this), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    dayFromNum(num) {
        if(num === 1){
            return "Monday";
        }
    }

    monthFromNum(num) {
        if (num === 0) {
            return "Jan";
        }
    }

    render() {
        const ClockHeader = () => {
            return <section>
                <h1>Garon &amp; John's Clock</h1>
            </section>;
        };

        const theDate = this.state.date;

        return <section>
            <h1>Garon &amp; John's Clock</h1>
            <div className="clock">
                <p>Time :{theDate.getHours()} : {theDate.getMinutes()} : {theDate.getSeconds()}</p>
                <p>Date: {this.dayFromNum(theDate.getDay())} {this.monthFromNum(theDate.getMonth())} {theDate.getDate()} {theDate.getFullYear()}</p>
            </div>
        </section>;
    }

}

// module.exports = Clock;
export default Clock;