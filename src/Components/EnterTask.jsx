import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import './components.css';

export default function EnterTask({task}){
    let [entry, SetEntry] = useState('');

    let updateInput = (event)=>{
        SetEntry(event.target.value);
    }

    let updateOnSubmit = (event)=>{
        event.preventDefault();
        SetEntry('');
        task(entry, uuidv4());
    }

    return (
        <div style={{marginBottom:' none', paddingBottom:'none'}}>
            <form onSubmit={updateOnSubmit}>
                <TextField id="standard-basic" label="Task" variant='filled' color='none' required style={{background:"rgba(18,32,64,0.8)"}} sx={{'& .MuiFilledInput-root':{color:'#ccd0d7', border:'1px solid #4491b3', borderRadius:'0'}, '& .MuiInputLabel-filled':{color:'rgba(204,208,215,0.5)'}}} value={entry} onChange={updateInput} />
                <Button variant='outlined' style={{height:'3.18rem', background:"#242424",}} type='submit' sx={{borderRadius:'0'}} ><AddIcon color='success' style={{backgroundColor:'#000'}}/></Button>
            </form>
        </div>
    );
}