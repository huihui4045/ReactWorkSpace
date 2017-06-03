/**
 * Created by molu_ on 2017/4/3.
 */

import React from "react";


class Button extends React.Component {

    //默认属性值
    getDefaultProps() {
        return {
            onClick: null,
            className: '',
            text: ''
        };
    }

    render() {

        return <button className={`Button ${this.props.className}`}
                       onClick={this.props.onClick}>{this.props.text}</button>
    }
}
export default Button;


{/*
 <button className="Button success">开始</button>
 <button className="Button warning">重置</button>
 <button className="Button primary">记录</button>
 <button className="Button undefined">清空</button>*/
}
