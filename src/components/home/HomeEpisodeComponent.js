import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


function HomeEpisodeComponent(){
    var episode1 = [];
    var episode2 = [];
    var episode3 = [];
    //Get The best Episodes
    const [dataEpisode, setDataEpisode] = useState([]);
    useEffect(() => {
        const getData = async () => {
            await axios.get('https://rickandmortyapi.com/api/episode/42,32,17,12,43,5')
            .then((resEpisode) => {
                console.log(resEpisode.data);
                setDataEpisode(resEpisode.data);
            })
            .catch(err => {
                console.log(err);
            });
        }
        getData()
    }, []);
    // //printing The best Episodes
    for(let i = 0; i < dataEpisode.length/3; i++){
        episode1.push(
            <div className="hijoHome">
                <h1>Title: {dataEpisode[i].name}</h1>
                <h1>Air Date: {dataEpisode[i].air_date}</h1>
                <h1>Created: {dataEpisode[i].created}</h1>
                <h1>Episode: {dataEpisode[i].episode}</h1>
            </div>
        );
    }
    for(let i = 0; i < dataEpisode.length/3; i++){
        episode2.push(
            <div className="hijoHome">
                <h1>Title: {dataEpisode[i + 2].name}</h1>
                <h1>Air Date: {dataEpisode[i + 2].air_date}</h1>
                <h1>Created: {dataEpisode[i + 2].created}</h1>
                <h1>Episode: {dataEpisode[i + 2].episode}</h1>
            </div>
        );
    }
    for(let i = 0; i < dataEpisode.length/3; i++){
        episode3.push(
            <div className="hijoHome">
                <h1>Title: {dataEpisode[i + 4].name}</h1>
                <h1>Air Date: {dataEpisode[i + 4].air_date}</h1>
                <h1>Created: {dataEpisode[i + 4].created}</h1>
                <h1>Episode: {dataEpisode[i + 4].episode}</h1>
            </div>
        );
    }
    return(
        <div>
            <div className="subtitle">
                <h1>The Best Episodes</h1>
            </div>
            <div className="padreHome">
                {episode1}
            </div>
            <div className="padreHome">
                {episode2}
            </div>
            <div className="padreHome">
                {episode3}
            </div>
        </div>
    );
}
export default HomeEpisodeComponent;