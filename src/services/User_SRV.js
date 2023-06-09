import axios from "axios";
import config from "../config.json";


export const getProfil = async (uri) => {
    return axios.get(config.back.profil + "/" + uri)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

//TODO: GetExperienceByProfil