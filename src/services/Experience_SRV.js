import axios from "axios";
import config from "../config.json";
export const getExperienceByUriProfilAndUriExperience = async (idProfil, uri) => {
    const data = {
        idProfil: idProfil,
        uriExperience: uri
    };
    return axios.post(config.back.experience, data)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

//TODO: GetExperienceByProfil