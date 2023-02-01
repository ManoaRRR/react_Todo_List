import React,{useState} from 'react';
function TodoForms (){
    const [tache, setTaches]= useState([]);
    const [newTaches , setNewTaches]= useState("");
    const [checkTask, setcheckTast]= useState([]);     
     
    const handleSubmit= (e)=>{
        e.preventDefault();
        setTaches([...tache, newTaches]);
        setNewTaches("");
     }
     const handleChange= (e)=>{
        setNewTaches(e.target.value);
     }
     const handleCheck=(e)=>{
        if(e.target){
            setcheckTast([...checkTask, e.target.value]);
        } else{
            setcheckTast(
                checkTask.filter((task) => task !== e.target.value)
            );
        }
     }
     return (
        <div >
          <div >
          <form onSubmit={handleSubmit}>
          <h1>to do:</h1>
            <input
              type="text"
              placeholder="Nouvelle tâche"
              value={newTaches}
              onChange={handleChange}
            />
            <button type="submit">Ajouter</button>
          </form>
         
          <div>
            {tache.map((task, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={task}
                  name={task}
                  value={task}
                  onChange={handleCheck}
                />
                <label for={task}>{task}</label>
              </div>
            ))}
          </div>
          </div>
          <div >
            <h1>Done: </h1>
            <ul>
              {checkTask.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      );

}
export default TodoForms;