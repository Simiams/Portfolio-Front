import axios from "axios";
import config from "../config.json";
import {getProfil} from "./User_SRV";

export const getExperienceByUriProfilAndUriProject = async (uriProfil, uriProject) => {
    const data = {
        idProfil: 1,
        uri: uriProject
    };
    getProfil(uriProfil).then(response => {
        data.idProfil = response.id;
    });

    return axios.post(config.back.project, data)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

//TODO: GetExperienceByProfil