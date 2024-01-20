import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target

    if(name == "taskName"){
        setTaskName(value)
    }else{
        setDescription(value)
    }
  }

  useEffect(() =>{
    setTaskName(taskObj.Name)
    setDescription(taskObj.Description)
  },[])

  const handleUpdate = (e) =>{
    e.preventDefault();
    let tempObj = {}
    tempObj["Name"] = taskName
    tempObj["Description"] = description
    updateTask(tempObj)
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Update Task</label>
              <input type="text" name="taskName" value={taskName} className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group mt-3">
              <label>Update Description</label>
              <textarea rows="5" name="description" value={description} className="form-control" onChange={handleChange} />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditTask;

