import React, {Component} from 'react';
import Section from "../components/experience/Section";
import SubSection from "../components/experience/SubSection";
import queryString from 'query-string';

import userData from "../data/CV/user.data";
class Experience extends Component {

    render() {

        return (
            <div className={"experiencePage"}>
                <Section/>
                <SubSection/>
            </div>
        );
    }
}

export default Experience;