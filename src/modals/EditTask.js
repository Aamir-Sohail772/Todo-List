import React,{useState,useEffect} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTaskPopup = ({ modal, toggle ,updateTask,taskObj }) => {
    const [taskName,setTaskName] = useState('');
    const [description,setDescription] = useState('');

    const handleChange = (e)=>{
        const {name,value} = e.target;
        if(name==="taskName"){
            setTaskName(value);
        }else{
            setDescription(value);
        }
    }

    useEffect(()=>{
        setTaskName(taskObj.Name);
        setDescription(taskObj.Description);
    },[]);

    const handleUpdate = (e)=>{
        e.preventDefault()
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
    }
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="modalHeader">
          Update Task
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label className="label mt-2">Task Name</label>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Enter your task"
                value={taskName} onChange={handleChange} name="taskName"
              />
            </div>
            <div className="form-group">
              <label className="label mt-3">Description</label>
              <textarea rows="5" className="form-control mt-2" placeholder="Write something here..." value={description} onChange={handleChange} name="description"> 
              </textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>{" "}
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default EditTaskPopup;
