import axios from "axios";
import config from "../config.json";

export const getProfil = () => {
    return axios.get(config.back.profil)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

//TODO: GetExperienceByProfil