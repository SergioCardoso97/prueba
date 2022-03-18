import React, {useState} from 'react';
import './Characters.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { FaSearch } from 'react-icons/fa';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from "axios";
function CharactersComponent(){
    
    var name = '';
    var status = '';
    var species = '';
    var gender = '';
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedComponent, setSelectedComponent] = useState('');
    const [dataCharacterStatus, setDataCharacterStatus] = useState([]);
    const [dataCharacterSpecies, setDataCharacterSpecies] = useState([[]]);
    const [dataCharacterGender, setDataCharacterGender] = useState([[]]);

    function handleChangeOption(event){
        setSelectedValue(event.target.value);
        console.log(event.target.value);
    };

    function SearchStatus(event){
        event.preventDefault();
        setSelectedComponent('1')
        name = document.getElementById('name').value;
        status = document.getElementById('status').value;
        console.log("name: " + name + ", status: " + status + ", species: " + species + ", gender: " + gender);
        const getData = async () => {
            await axios.get('https://rickandmortyapi.com/api/character/?name=' + name + '&status=' + status)
            .then((resCharacter) => {
                console.log(resCharacter.data.results);
                setDataCharacterStatus(resCharacter.data.results);
            })
            .catch(err => {
                console.log(err);
            });
        }
        getData();        
    }

    function searchSpecies(event) {
        event.preventDefault();
        setSelectedComponent('2')
        name = document.getElementById('name').value;
        species = document.getElementById('species').value;
        console.log("name: " + name + ", status: " + status + ", species: " + species + ", gender: " + gender);
        const getData = async () => {
            await axios.get('https://rickandmortyapi.com/api/character/?name=' + name + '&species=' + species)
            .then((resCharacter) => {
                console.log(resCharacter.data.results);
                setDataCharacterSpecies(resCharacter.data.results);
            })
            .catch(err => {
                console.log(err);
            });
        }
        getData(); 
    }

    function searchGender(event) {
        event.preventDefault();
        setSelectedComponent('3')
        name = document.getElementById('name').value;
        gender = document.getElementById('gender').value;
        console.log("name: " + name + ", status: " + status + ", species: " + species + ", gender: " + gender);
        const getData = async () => {
            await axios.get('https://rickandmortyapi.com/api/character/?name=' + name + '&gender=' + gender)
            .then((resCharacter) => {
                console.log(resCharacter.data.results);
                setDataCharacterGender(resCharacter.data.results);
            })
            .catch(err => {
                console.log(err);
            });
        }
        getData()
    }
    
    const Status = () =><div>
                                <TextField
                                    helperText="Enter the character's name"
                                    id="name"
                                    label="Name"
                                    defaultValue={name}/>
                                <TextField
                                    helperText="Enter character status"
                                    id="status"
                                    label="Status"
                                    defaultValue={status}/>
                                <Button  variant="outlined" color="success" onClick={SearchStatus}> Search <FaSearch style={{fontSize: '45px'}}/></Button>
                            </div>;
    const Species = () =><div>
                                <TextField
                                    helperText="Enter the character's name"
                                    id="name"
                                    label="Name"
                                    defaultValue={name}/>
                                <TextField
                                    helperText="Enter character species"
                                    id="species"
                                    label="Species"
                                    defaultValue={species}
                                    />
                                <Button variant="outlined" color="success" onClick={searchSpecies}> Search <FaSearch style={{fontSize: '45px'}}/></Button>
                                
                            </div>;
    const Gender = () =><div>
                                <TextField
                                    helperText="Enter the character's name"
                                    id="name"
                                    label="Name"
                                    defaultValue={name}
                                     />
                                <TextField
                                    helperText="Enter character gender"
                                    id="gender"
                                    label="Gender"
                                    defaultValue={gender}
                                    />
                                <Button variant="outlined" color="success" onClick={searchGender}> Search <FaSearch style={{fontSize: '45px'}}/></Button>
                                
                            </div>;
    const GetStatus = dataCharacterStatus.map( (item) =>
       <div>
            <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={item.image}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                        Name: {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Status: {item.status}, Species: {item.species}, Gender: {item.gender}
                        </Typography>
                    </CardContent>
            </Card>

       </div>
    ); 
    const GetSpecies = dataCharacterSpecies.map( (item) =>
       <div>
            <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={item.image}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                        Name: {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Status: {item.status}, Species: {item.species}, Gender: {item.gender}
                        </Typography>
                    </CardContent>
            </Card>

       </div>
    );
    const GetGender = dataCharacterGender.map( (item) =>
       <div >
            
            <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={item.image}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                        Name: {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Status: {item.status}, Species: {item.species}, Gender: {item.gender}
                        </Typography>
                    </CardContent>
            </Card>
            
       </div>
    );
    return(
        <div>
            <div className="subtitle">
                <h1>Character Search Filters</h1>
            </div>
            <div className="subtitle">
                <FormControl>
                    <RadioGroup row ria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                        <FormControlLabel value="female" control={<Radio color="success" checked={selectedValue === 'name and status'} onChange={handleChangeOption} value="name and status" />} label="Name & Status" />
                        <FormControlLabel value="male" control={<Radio color="success" checked={selectedValue === 'name and species'} onChange={handleChangeOption} value="name and species"  />} label="Name & Species" />
                        <FormControlLabel value="other" control={<Radio color="success" checked={selectedValue === 'name and gender'} onChange={handleChangeOption} value="name and gender"  />} label="Name & Gender" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="subtitle">
                {selectedValue === 'name and status' ? <Status/> : null}
                {selectedValue === 'name and species' ? <Species/> : null}
                {selectedValue === 'name and gender' ? <Gender/> : null}
                
            </div>
            <div className="searchCharacters">
                {selectedComponent === '1' ? <div className='searchCharacters2'>{GetStatus}</div> : null}
                {selectedComponent === '2' ? <div className='searchCharacters2'>{GetSpecies}</div> : null}
                {selectedComponent === '3' ? <div className='searchCharacters2'>{GetGender}</div> : null}
            </div>
        </div>
    );

    
}
export default CharactersComponent;