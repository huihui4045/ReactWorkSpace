/**
 * Created by molu_ on 2017/3/26.
 */

import React, {Component, PropTypes} from 'react';

class Tabs extends Component {



    constructor(props) {

        super(props);

        const currProps = this.props;
        let activeIndex = 0;

        if ('activeIndex' in currProps) {

            activeIndex = currProps.activeIndex;
        } else if ('' in currProps) {

            activeIndex = currProps.defaultActiveIndex;
        }

        this.state = {

            activeIndex,
            prevIndex: activeIndex,
        };

    }


    render() {

        //return <div className="ui-tabs"></div>

        return <div className="ui-tabs"></div>
    }
}
export default Tabs;