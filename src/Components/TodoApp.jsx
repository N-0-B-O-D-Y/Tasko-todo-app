import EnterTask from "./EnterTask.jsx";
import ShowTask from "./ShowTask.jsx";
import {useState} from "react";

export default function TodoApp(){
    let [currentTask, setCurrentTask] = useState([]);
    let [currentID, setCurrentID] = useState([]);

    let getTask = (task, key)=>{
        setCurrentTask([...currentTask,{task:task, id:key, isDone:false, isChecked:false}]);
    }

    let deleteItem = (id)=>{
        let newArray = currentTask.filter((item)=> item.id!== id);
        setCurrentTask(newArray);
    }

    let doneTask = (id) =>{

        setCurrentID([...currentID,id]);

        let updated = currentTask.map((item)=> {
            if(item.id === id){
                if(item.isDone) {
                    return {...item, isDone: false, isChecked:false};
                }
                else{
                    return {...item, isDone: true, isChecked:true};
                }
            }
            else{
                return item;
            }
        });
        setCurrentTask(updated);
    }

    // way 1

    // let doneAll = (pressed)=>{
    //     let updated;
    //     if(pressed === 1){
    //         updated = currentTask.map((item)=> {return {...item, isDone:true, isChecked:true}});
    //     }
    //     else if(pressed === 0){
    //         updated = currentTask.map((item)=> {return {...item, isDone:false, isChecked:false}});
    //     }
    //     setCurrentTask(updated);
    // }

    //way 2
    let doneAll2 = ()=>{
        let updated= currentTask.map((item)=> {
            for(let ele of currentID){
                if(item.id === ele) {
                    if(item.isDone===false){
                        return {...item, isDone:false, isChecked:false};
                    }
                    else if(item.isDone===true){
                        return {...item, isDone:true, isChecked:true};
                    }
                }
            }

            if (item.isDone === false) {
                return {...item, isDone: true, isChecked: true};
            } else if (item.isDone === true) {
                return {...item, isDone: false, isChecked: false};
            } else {
                return item;
            }
        });
        setCurrentID([]);
        setCurrentTask(updated);
    }

    let deleteAll =()=>{

        //way 1 → this is more optimized
        if(!(Array.isArray(currentTask)&&currentTask.length===0)){
            setCurrentTask([]);
        }

        //way 2 → its time complexity is more as it will check each item of the array for the condition.
        /* let updated = currentTask.filter((item)=>{return item===null});
           setCurrentTask(updated);
        */

    }

    return (
        <>
            <div className='todo-container' style={{ fontFamily:'Roboto', minHeight:'300px',minWidth:'480px', maxWidth:'90%', border:'none', borderRadius:'10px', borderTopLeftRadius:'80px', borderBottomRightRadius:'80px',boxShadow: '3px 3px 10px #4491b3', background:'#020609'}}>
                <h2 style={{fontSize:'2.5rem', lineHeight:'2.5rem', letterSpacing:'1px', color: '#8062f6', paddingTop:'1.4rem',marginBottom:'1rem'}}>Todo App</h2>

                <EnterTask task={getTask} />
                <ShowTask currTask={currentTask} deleteItem={deleteItem} doneTask={doneTask} doneAll={doneAll2} allDelete={deleteAll} />

            </div>
        </>
    );
}