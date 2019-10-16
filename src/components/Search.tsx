import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import './Search.css'


export default function Search() {
    const [username, setUsername] = React.useState('')
    const [showName, setShowName] = React.useState(false);
    const [userExists, setUserExists] = React.useState('Checking name status');
    console.log(showName)

    function getTwitchInfo(){
        axios.get(`/.netlify/functions/token-hider?username=${username}`)
        .then(res => {
            console.log(res.data.data[0])
            if(res.data.data[0]){
                setUserExists('true')
            }else if(!res.data.data[0]){
                setUserExists('false')
            }
        })
    }

    function renderSwitch(param: string){
        switch(param){
            case 'true':
                return <h1>{username} already exists! Please search another username</h1>
            case 'false':
                return <h1>{username} is available! Register it at <a href="https://twitch.tv/login">here</a>!</h1>
            default:
                return 'Checking name status'
        }
    }

    return (
        <div className="search-main">
            <TextField
                id="standard-name"
                label="Username"
                onChange={e => {setUsername(e.target.value); setShowName(false); setUserExists('Checking name status')}}
                margin="normal"
                // value={}
            />
            <Button 
                variant="contained" 
                color="secondary"
                onClick={() => {
                    setShowName(true);
                    getTwitchInfo()
                }}>
                Search
            </Button>
            {!showName
            ?
            null 
            :
            renderSwitch(userExists)
            }
            
        </div>
    )
}
