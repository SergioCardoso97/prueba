import React from "react";
import './Home.css';
import HomeEpisodeComponent from "./HomeEpisodeComponent";
import HomeCharactersComponent from "./HomeCharactersComponent";


function HomeComponent(){
    return(
        <div>
            <HomeCharactersComponent/>
            <HomeEpisodeComponent/>
        </div>
    );
}
export default HomeComponent;