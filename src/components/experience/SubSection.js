import React, {Component} from 'react';

class SubSection extends Component {
    render() {
        return (
            <div className={"subSection"}>
                <h2>TITRE</h2>
                <h3>SOUS TITRE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci alias atque cupiditate delectus deserunt eaque earum est exercitationem facere harum hic id ipsum labore magni natus necessitatibus nesciunt nihil nobis nostrum pariatur quae quaerat, sed sequi, similique soluta veritatis? Asperiores commodi dolores esse, laudantium natus nisi obcaecati placeat possimus?</p>
                <img src="/media/CV/languages/php.png" alt=""/>
            </div>
        );
    }
}

export default SubSection;