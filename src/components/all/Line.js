import React, {Component} from 'react';

class Line extends Component {
    render() {
        let {background, height} = this.props;
        return (
            <div className={"line"} style={{
                // background: background,
                // height:  height
            }}>
            </div>
        );
    }
}

export default Line;