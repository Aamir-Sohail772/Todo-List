import React,{useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle,save }) => {
    const [taskName,setTaskName] = useState('');
    const [description,setDescription] = useState('');

    const handleChange = (e)=>{
        // const name = e.target.name;
        // const value = e.target.value;

        const {name,value} = e.target;
        if(name==="taskName"){
            setTaskName(value);
        }else{
            setDescription(value);
        }
    }
    const handleSave = ()=>{
        let taskObj = {};
        taskObj["Name"] = taskName;
        taskObj["Description"] = description;
        save(taskObj);
    }
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="modalHeader">
          Create Task
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
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{" "}
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default CreateTask;
