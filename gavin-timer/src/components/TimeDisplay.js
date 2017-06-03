/**
 * Created by molu_ on 2017/3/30.
 */

import React from 'react';

import '../App.css';

import DisplayLog from "./DisplayLog";
import Button from "./Button";
import FormatTime from "../utils/FormatTime";


class TimeDisplay extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            time: 0,
            on: false,
            log: []
        };
    }

    handleToggle = () => {

        if (this.state.on) {

            clearInterval(this.timer)
        } else {

            this.timer = setInterval(() => {


                this.setState({time: this.state.time + 1});


            }, 10);
        }


        this.setState({on: !this.state.on});


    }


    handleLogTime = () => {

        //存储在数组中
        this.state.log.push(this.state.time);

        console.log(this.state.log);
    }

    handleClearLog = () => {

        this.setState({log: []});
    }

    handleReset = () => {

        this.setState({time: 0});

        this.handleClearLog();
    }

    render() {

        console.log("  render  handleLogTime");

        let time = FormatTime(this.state.time)

        return <div>
            <h1 className="display-time">{time}</h1>

            <div className="controls">
                <Button className="success" text={this.state.on ? "暂停" : "开始"} onClick={this.handleToggle}></Button>
                <Button className="warning" text="重置" onClick={this.handleReset}></Button>
                <Button className="primary" text="记录" onClick={this.handleLogTime}></Button>
                <Button className="undefined" text="清空" onClick={this.handleClearLog}></Button>
            </div>
            <DisplayLog log={this.state.log}/>

        </div>
    }

}

export default TimeDisplay;