import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import './Search.css'


export default function Search() {
    const [username, setUsername] = React.useState('')
    const [showName, setShowName] = React.useState(false);
    console.log(showName)

    function getTwitchInfo(){
        axios.get(`/.netlify/functions/token-hider?username=${username}`)
        .then(res => {
            console.log(res.data.data[0])
        })
    }

    return (
        <div className="search-main">
            <TextField
                id="standard-name"
                label="Username"
                onChange={e => setUsername(e.target.value)}
                margin="normal"
            />
            <Button 
                variant="contained" 
                color="secondary"
                onClick={() => {
                    setShowName(true)
                    getTwitchInfo()
                }}>
                Search
            </Button>
            {showName ? <h1>{username}</h1> : <h1>Please enter username to get started.</h1>}
        </div>
    )
}
