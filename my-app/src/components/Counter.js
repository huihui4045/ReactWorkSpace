/**
 * Created by molu_ on 2017/3/26.
 */

import React, {Component, PropTypes} from 'react';

class Counter extends Component {

    static propTypes = {};

    static defaultProps = {};

    componentWillMount() {//render 渲染前 只执行一次

        this.mylog("componentWillMount");
    }

    componentDidMount() {//render 渲染后 只执行一次

        this.mylog("componentDidMount");
    }


    componentWillUnmount() {

        this.mylog("componentWillUnmount");//组件卸载
    }

    constructor(props) {

        super(props);
        this.state = {count: 0};
    }


    handleClick = (e) => {

        e.preventDefault();

        this.setState({
            count: this.state.count + 1,
        })
        ;
    }


    render() {

        console.log("render")

        //return <div className="ui-tabs"></div>

        return <div className="ui-tabs">
            <p>{this.state.count}11111</p>
            <a href="#" onClick={this.handleClick}>更新</a>
        </div>
    }

    mylog = (msg) => {

        console.log(msg)
    }
}
export default Counter;