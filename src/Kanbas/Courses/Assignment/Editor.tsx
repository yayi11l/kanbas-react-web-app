import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment, setAssignments } from "./reducer"
import NameDescription from "./NameDescription";
import Points from "./Points";
import Group from "./Group";
import DisplayGrade from "./DisplayGrade";
import SubmissionType from "./SubmissionType";
import Assign from "./Assign";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const assignment = assignments.find((assignment : any) => assignment.course === cid && assignment._id === aid)|| {
    _id: '',
    description: '',
    points: 0,
    dueDate: '',
    availableFrom: '',
    availableUntil: ''
  };

  const [formState, setFormState] = useState({
    _id: assignment._id || '',
    description: assignment.description || '',
    points: assignment.points || 0,
    dueDate: assignment.dueDate || '',
    availableFrom: assignment.availableFrom || '',
    availableUntil: assignment.availableUntil || ''
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const dispatch = useDispatch();
  const createAssignment = async (assignment : any) => {
    const newAssignment = await client.createAssignments(cid as string, assignment);
    dispatch(addAssignment(newAssignment))
  }
  const saveAssignment = async (assignment : any) => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment))
  }

  const handleSave = () => {
    if (!aid) {
      createAssignment({course: cid, ...formState});
    } else {
      saveAssignment(formState);
    }
  };

  return (
    <div id="wd-assignments-editor">
      {/* <NameDescription assignment = {assignment}/> */}
      <NameDescription assignment = {assignment} handleChange = {handleChange}/>
      <form>
        <Points assignment = {assignment} handleChange = {handleChange}/>
        {/* <Group assignment = {assignment} />
        <DisplayGrade assignment = {assignment} />
        <SubmissionType assignment = {assignment} /> */}
        <Assign assignment = {assignment} handleChange = {handleChange}/>
      </form>
      <br />
      <hr />
      <div style={{display: 'flex', justifyContent: 'right'}}>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-1"> Cancle </Link>
        <Link onClick={handleSave} 
              to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger"> Save </Link>
      </div>
      
    </div>
);}
