import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
            <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    <Typography variant="h3" component="div">
                        Title: {dataEpisode[i].name}.
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                        Air Date: {dataEpisode[i].air_date}.
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                        Created: {dataEpisode[i].created}.
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Episode: {dataEpisode[i].episode}. 
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        # Characters in the Episode: {dataEpisode[i].characters.length}.
                    </Typography>
                    </CardContent>
            </Card>
        );
    }
    for(let i = 0; i < dataEpisode.length/3; i++){
        episode2.push(
            <div className="hijoHome">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    <Typography variant="h3" component="div">
                        Title: {dataEpisode[i].name}.
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                        Air Date: {dataEpisode[i].air_date}.
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                        Created: {dataEpisode[i].created}.
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Episode: {dataEpisode[i].episode}. 
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        # Characters in the Episode: {dataEpisode[i].characters.length}.
                    </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
    for(let i = 0; i < dataEpisode.length/3; i++){
        episode3.push(
            <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    <Typography variant="h3" component="div">
                        Title: {dataEpisode[i].name}.
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                        Air Date: {dataEpisode[i].air_date}.
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                        Created: {dataEpisode[i].created}.
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Episode: {dataEpisode[i].episode}. 
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        # Characters in the Episode: {dataEpisode[i].characters.length}.
                    </Typography>
                    </CardContent>
            </Card>
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