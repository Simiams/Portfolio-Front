import React, {Component} from 'react';

class Line extends Component {
    render() {
        let {background, height, width} = this.props;
        return (
            <div className={"line"} style={{
                background: background,
                height:  height,
                width: width
            }}>
            </div>
        );
    }
}

export default Line;