import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import DoneAllIcon from '@mui/icons-material/DoneAll';
// import {useState} from "react";

export default function ShowTask({currTask, deleteItem, doneTask, doneAll, allDelete}) {
    // let [pressed, setPressed] = useState(0);

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    let deleteTask = (id)=>{
        deleteItem(id);
    }

    let deleteAll = ()=>{
        allDelete();
    }

    let checkBoxClicked = (event, id)=>{
        doneTask(id);
    }

    // way 1

    // let allDone = ()=>{
    //     if(pressed===0){
    //         setPressed(1);
    //     }
    //     else{
    //         setPressed(0);
    //     }
    //     doneAll(pressed);
    // }

    // way 2
    let allDone = () =>{
        doneAll();
    }

    return (
        <div style={{marginTop:'1rem'}}>

            {/*here we are checking if the current task list is empty or not.*/}

            <span>
                <Button variant="contained" size='small' onClick={allDone} disabled={currTask.length === 0}>
                    <DoneAllIcon />
                </Button>

                &nbsp;&nbsp;&nbsp;

                <Button variant="contained" color='error' size='small' onClick={deleteAll} disabled={currTask.length === 0}>
                    <DeleteIcon />
                    <DoneAllIcon />
                </Button>
            </span>

            <ul style={{marginTop:'2rem',paddingBottom:'1.8rem'}}>
                {currTask.map((item)=>(
                    <li key={item.id} style={{fontSize:'1.2rem',color:'#f7931a', lineHeight:'2.5rem', textTransform:'capitalize', fontWeight:'600'}} >
                        <span style={(item.isDone)?{textDecorationThickness:'2px',textDecorationColor:'lightgrey',textDecorationLine:'line-through'}:{}}>{item.task}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Checkbox
                            {...label}
                            // defaultChecked={false}
                            checked={item.isChecked}
                            sx={{
                                color: '#1fae90',
                                '&.Mui-checked': {
                                    color: '#379ca6',
                                },
                            }}
                             onChange={(event)=>checkBoxClicked(event, item.id)} />
                        &nbsp;&nbsp;&nbsp;
                        <IconButton aria-label="delete" onClick={()=>deleteTask(item.id)}>
                            <DeleteIcon color='secondary'/>
                    </IconButton> </li>
                ))}
            </ul>
        </div>
    )
}