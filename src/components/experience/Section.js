import React, {Component} from 'react';

class Section extends Component {
    render() {
        return (
            <div className={"section"}>
                <div className="logo">
                    <img src="/media/CV/languages/c++.png" alt=""/>
                </div>
                <div className="content">
                    <h1>TITRE</h1>
                    <h2>SOUS TITRE</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci alias atque cupiditate delectus deserunt eaque earum est exercitationem facere harum hic id ipsum labore magni natus necessitatibus nesciunt nihil nobis nostrum pariatur quae quaerat, sed sequi, similique soluta veritatis? Asperiores commodi dolores esse, laudantium natus nisi obcaecati placeat possimus?</p>
                </div>
            </div>
        );
    }
}

export default Section;