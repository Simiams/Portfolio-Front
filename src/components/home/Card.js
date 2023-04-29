import React, {Component} from 'react';
import CardSkill from "./CardSkill";
import axios from "axios";
import {getProfil} from "../../services/User_SRV";


class Card extends Component {
    // state = {cardInfoData: null}
    // changePdp = () => {
    //     let pokemonIndex = Math.floor(Math.random() * (905 - 1 + 1)) + 1;
    //     try {
    //         axios({
    //             method: "get",
    //             url: `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`,
    //         }).then((res) => {
    //             console.log(res.data.sprites.front_default);
    //             this.setState({
    //                 profilePic: res.data.sprites.front_default
    //             })
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // changeBgPdp = () => {
    //     let year = Math.floor(Math.random() * (2021 - 2003 + 1)) + 2003;
    //     let month = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    //     let day = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
    //     try {
    //         axios({
    //             method: "get",
    //             url: `https://api.nasa.gov/planetary/apod?api_key=SsZaFG5yOgcngUkkuQdQ67lpl5AyKUcnv5c8wJai&date=${year + "-" + month + "-" + day}`,
    //         }).then((res) => {
    //             let {date, explanation, title, url} = res.data;
    //             this.setState({
    //                 profileBgPic: {url}.url,
    //                 infoNasa: {date, explanation, title}
    //             })
    //             console.log(this.state.profileBgPic)
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // displayInfos = () => {
    //     let info = document.getElementById('info')
    //     let skills = document.getElementById('skills')
    //     info.style.display = "block";
    //     skills.style.display = "none";
    // }
    // hiddeInfos = () => {
    //     let info = document.getElementById('info')
    //     let skills = document.getElementById('skills')
    //     info.style.display = "none";
    //     skills.style.display = "block";
    // }

    render() {
        // let {profileBgPic, profilePic, infoNasa, skills} = this.state;

        let {profil} = this.props;
        //TODO: Recupe les competence en axios


        return (
            <div className={"card"}>
                <div className="id">
                    <div className="idContent">
                        <div className="head">
                            <h3>{profil.name} {profil.lastName}</h3>
                            <h3>{profil.ddn}</h3>
                        </div>
                        <div className="image" style={{
                            background: `url(${"/bg.jpg"}) repeat scroll center`
                        }}>
                            <img src={"/pokemon.png"} alt="profil pic" onClick={this.changePdp}/>
                        </div>
                    </div>
                </div>

                {/*<div onMouseOut={this.hiddeInfos} onMouseOver={this.displayInfos} id={"info"} className="popup" style={{*/}
                {/*    display: "none"*/}
                {/*}}>*/}
                {/*    <h2>{infoNasa.title}</h2>*/}
                {/*    <p>{infoNasa.date}</p>*/}
                {/*    <p>{infoNasa.explanation}</p>*/}
                {/*    <a target="_blank" rel="noopener noreferrer" href={profileBgPic}>View Full Image</a>*/}
                {/*</div>*/}

                <div className="skills" id={"skills"}>
                    <ul>
                        {
                            profil.competences.map((competence) => {
                                return (
                                    <li>
                                        <div className={"cardSkill"}>
                                            <img src={"/logo192.png"} alt={competence.name + " logo"}/>
                                            <span>{competence.name}</span>
                                            <span>{competence.startPractice}</span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="signature">
                    <p>From SimonConvert</p>
                </div>

            </div>
        );
    }
}

export default Card;
