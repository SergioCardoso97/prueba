import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function HomeCharactersComponent(){
    //variables
    var character1 = [];
    var character2 = [];
    
    //Get Principals Characters
    const [dataCharacter, setDataCharacter] = useState([]);
    useEffect(() => {
        const getData = async () => {
            await axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5')
            .then((resCharacter) => {
                console.log(resCharacter.data);
                setDataCharacter(resCharacter.data);
            })
            .catch(err => {
                console.log(err);
            });
        }
        getData()    
    }, []);
    //printing Principals Characters
    for(let i = 0; i < dataCharacter.length/2; i++){
        character1.push(
            <div className="hijoHome">
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={dataCharacter[i].image}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                        Name: {dataCharacter[i].name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Status: {dataCharacter[i].status}, Species: {dataCharacter[i].species}, Gender: {dataCharacter[i].gender}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Appears in: {dataCharacter[i].episode.length} episodes, Location: {dataCharacter[i].location.name}.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
    for(let i = 3; i < dataCharacter.length; i++){
        character2.push(
            <div className="hijoHome">
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={dataCharacter[i].image}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                        Name: {dataCharacter[i].name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Status: {dataCharacter[i].status}, Species: {dataCharacter[i].species}, Gender: {dataCharacter[i].gender}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Appears in: {dataCharacter[i].episode.length} episodes, Location: {dataCharacter[i].location.name}.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return(
        <div>
            <div className="subtitle">
                <h1>Principals Characters</h1>
            </div>
            <div className="padreHome">
                {character1}
            </div>
            <div className="padreHome">
                {character2}
            </div>
        </div>
    );
}
export default HomeCharactersComponent;