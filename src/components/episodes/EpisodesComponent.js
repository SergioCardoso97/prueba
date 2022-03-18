import React,{useState} from "react";
import './Episodes.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaSearch } from 'react-icons/fa';
import Button from '@mui/material/Button';
import axios from "axios";

function EpisodesComponent(){

    var episode= '';
    var episode1 = [];
    const [searson, setSearson] = useState('');
    const [episodeSelect, setEpisodeSelect] = useState('');
    const [dataEpisode, setDataEpisode] = useState([]);

    function handleChangeSearson(event){
        setSearson(event.target.value);
        console.log(event.target.value);
    };
    function handleChangeEpisode(event){
        setEpisodeSelect(event.target.value);
        console.log(event.target.value);
    };
    function SearchEpisode(event){
        event.preventDefault();
        episode = 'S0' + searson + 'E0' + episodeSelect;
        if(episodeSelect === 10 || episodeSelect === 11)
        {
            episode = 'S0' + searson + 'E' + episodeSelect;
        }
        console.log(episode);
        const getData = async () => {
            await axios.get('https://rickandmortyapi.com/api/episode/?episode=' + episode)
            .then((resEpisode) => {
                console.log(resEpisode.data.results);
                setDataEpisode(resEpisode.data.results);
            })
            .catch(err => {
                console.log(err);
            });
        }
        getData()

    };
    for(let i = 0; i < dataEpisode.length; i++){
        episode1.push(
            <div>
                <h1>Title: {dataEpisode[i].name}</h1>
                <h1>Air Date: {dataEpisode[i].air_date}</h1>
                <h1>Created: {dataEpisode[i].created}</h1>
                <h1>Episode: {dataEpisode[i].episode}</h1>
                <h1># Characters in the Episode: {dataEpisode[i].characters.length}</h1>
            </div>
        );
    }
    return(
        <div>
            <div className="subtitle">
                <h1>Episode Search</h1>
            </div>
            <div className="subtitle">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Searson</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={searson}
                            label="Age"
                            onChange={handleChangeSearson}
                            >
                            <MenuItem value={1}>One</MenuItem>
                            <MenuItem value={2}>Two</MenuItem>
                            <MenuItem value={3}>Tree</MenuItem>
                            <MenuItem value={4}>Four</MenuItem>
                            <MenuItem value={5}>Five</MenuItem>
                            </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Episode</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={episodeSelect}
                            label="Episode"
                            onChange={handleChangeEpisode}
                            >
                            <MenuItem value={1}>One</MenuItem>
                            <MenuItem value={2}>Two</MenuItem>
                            <MenuItem value={3}>Tree</MenuItem>
                            <MenuItem value={4}>Four</MenuItem>
                            <MenuItem value={5}>Five</MenuItem>
                            <MenuItem value={6}>Six</MenuItem>
                            <MenuItem value={7}>Seven</MenuItem>
                            <MenuItem value={8}>Eight</MenuItem>
                            <MenuItem value={9}>Nine</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            {searson === 1 ? <MenuItem value={11}>Eleven</MenuItem>:null}
                        </Select>
                    </FormControl>
                </Box>
                <Button  variant="outlined" color="success" onClick={SearchEpisode}> Search <FaSearch style={{fontSize: '45px'}}/></Button>
            </div>
            <div className="searchEpisode">
                {episode1}
            </div>
        </div>
    );
}
export default EpisodesComponent;