import axios from "axios";
import config from "../config.json";

export const getExperienceByUriProfilAndUriProject = async (uriProfil, uriProject) => {
    const data = {
        uriProfil: uriProfil,
        uriProject: uriProject
    };
    return axios.post(config.back.project, data)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

//TODO: GetExperienceByProfil