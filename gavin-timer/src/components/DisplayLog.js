/**
 * Created by molu_ on 2017/4/3.
 */

import React from 'react';
import '../App.css';
import FormatTime from "../utils/FormatTime";

class DisplayLog extends React.Component {

    renderEmpty = () => {

        return <span className="empty-log">空空如也。。。</span>;
    }

    renderLog = () => {

        return this.props.log.map((item) => {

            return <li className="log-item">{FormatTime(item)}</li>
        });
    }

    render() {

        const log = this.props.log.length == 0 ? this.renderEmpty() : this.renderLog();

        return <ul className="log">

            {log}
        </ul>
    }


}

export default DisplayLog;