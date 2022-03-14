import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


function HomeCharactersComponent(){
    //variables
    var character1 = [];
    var character2 = [];
    
    //Get Principals Characters
    const [dataCharacter, setDataCharacter] = useState([]);
    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character/1,2,3,4,5')
        .then((resCharacter) => {
            console.log(resCharacter.data);
            setDataCharacter(resCharacter.data);
        })
    }, []);
    //printing Principals Characters
    for(let i = 0; i < dataCharacter.length/2; i++){
        character1.push(
            <div className="hijoHome">
                <img src={dataCharacter[i].image} alt=""></img>
                <h1>Name: {dataCharacter[i].name}</h1>
                <h1>Status: {dataCharacter[i].status}</h1>
                <h1>Species: {dataCharacter[i].species}</h1>
            </div>
        );
    }
    for(let i = 3; i < dataCharacter.length; i++){
        character2.push(
            <div className="hijoHome">
                <img src={dataCharacter[i].image} alt=""></img>
                <h1>Name: {dataCharacter[i].name}</h1>
                <h1>Status: {dataCharacter[i].status}</h1>
                <h1>Species: {dataCharacter[i].species}</h1>
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