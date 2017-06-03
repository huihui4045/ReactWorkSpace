/**
 * Created by molu_ on 2017/3/30.
 */

import React from 'react';

import '../App.css';

class TimeDisplay extends React.Component {


    render() {

        return <div>
            <h1 className="display-time">00:00:00.00</h1>

            <div className="controls">
                <button className="Button success">开始</button>
                <button className="Button warning">重置</button>
                <button className="Button primary">记录</button>
                <button className="Button undefined">清空</button>
            </div>

        </div>
    }

}

export default TimeDisplay;