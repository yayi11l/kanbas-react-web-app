import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer"
import NameDescription from "./NameDescription";
import Points from "./Points";
import Group from "./Group";
import DisplayGrade from "./DisplayGrade";
import SubmissionType from "./SubmissionType";
import Assign from "./Assign";
import { useEffect, useState } from "react";

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
  const handleSave = () => {
    const updatedAssignment = {
      ...assignment,
      ...formState,
      course: cid,
      _id: formState._id || Date.now().toString()
    };
    if (!aid) {
      dispatch(addAssignment(updatedAssignment));
    } else {
      dispatch(updateAssignment(updatedAssignment));
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
