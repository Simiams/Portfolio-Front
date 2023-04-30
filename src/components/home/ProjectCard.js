import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class ProjectCard extends Component {

    handleHover = (event) => {
        event.currentTarget.firstChild.style.opacity = 0;
        event.currentTarget.lastChild.style.opacity = 1;
        event.currentTarget.style.backgroundColor = "#f0f0f0";
    }

    handleLeave = (event) => {
        event.currentTarget.firstChild.style.opacity = 1;
        event.currentTarget.lastChild.style.opacity = 0;
        event.currentTarget.style.backgroundColor = "#0f0f0f";
    }

    render() {
        let project = this.props.project;
        console.log(project)

        return (
            <NavLink className={"projectCard"} exact to={"Project/" + project.uri}
                     onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}>
                <img src={project.icon} alt={project.name} />
                <h2 className="content">{project.name}</h2>
            </NavLink>
        );
    }
}

export default ProjectCard;
