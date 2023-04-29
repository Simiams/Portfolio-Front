import React from 'react';
import BuildingPage from "../components/all/BuildingPage";
import Contact from "../components/home/Contact";
import {userData} from "../data/CV/user.data";

const Project = () => {
    return (
        <div className={"project"}>
            <h2>This page is in building</h2>
            <BuildingPage />
            <Contact user={userData} />
        </div>
    );
};

export default Project;
