import React, { useState } from "react";
import EditTask from "../modals/EditTask";

const Cards = ({taskObj, index, deleteTask, updateListArray}) => {

  const [modal, setModal] =useState(false);
  const colors = [
    {
        primaryColor : "#5D93E1",
        secondaryColor : "#ECF3FC"
    },
    {
        primaryColor : "#F9D288",
        secondaryColor : "#FEFAF1"
    },
    {
        primaryColor : "#5DC250",
        secondaryColor : "#F2FAF1"
    },
    {
        primaryColor : "#F48687",
        secondaryColor : "#FDF1F1"
    },
    {
        primaryColor : "#B964F7",
        secondaryColor : "#F3F0FD"
    }
];

const toggle = () => {
  setModal(!modal)
}

const updateTask = (obj) =>{
  updateListArray(obj, index)
}
const handleDelete = () => {
  deleteTask(index)
}

  return (
    <div>
      <div className="card-wrapper mr-5 m-3">
        <div className="card-top" style={{ "background-color": colors[index%5].primaryColor }}></div>
        <div className="task-holder">
            <span className="card-header" style={{ "width" : "100%"}}>{taskObj.Name}</span>
            <p className="mt-4">{taskObj.Description}</p>

            <div  style={{"position" : "absolute", "right": "20px", "bottom" : "20px"}}>
                <i className="far fa-edit" style={{"color": colors[index%5].primaryColor}} onClick = { () => setModal(true)}></i>
                <i className="fas fa-trash-alt" style={{"color" : colors[index%5].primaryColor, "cursor": "pointer"}} onClick={handleDelete}></i>
            </div>
        </div>
      </div>
      <EditTask  modal={modal} toggle={toggle} updateTask={updateTask} taskObj = {taskObj}/>
    </div>
  );
};

export default Cards;
