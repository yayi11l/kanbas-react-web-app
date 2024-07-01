import { FaPlus, FaTrash } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { FaFilePen } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import "./index.css";
import { useParams, Link } from "react-router-dom";
import DeleteDialog from "./DeleteDialog";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, editAssignment } from "./reducer"

export default function Assignments() {
  const { cid } = useParams();
  // const assignments = db.assignments;
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch()

  return (
    <div id="wd-assignments">
      <br />
      <div>
        <Link id="wd-add-assignment" className="btn btn-m btn-danger me-1 float-end"
              to={`/Kanbas/Courses/${cid}/Assignments/new`}
              >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Link>
        <button id="wd-add-assignment-group" className="btn btn-m btn-secondary me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
        <div className="input-group mb-3 col-3 w-auto">
          <span className="input-group-text"><CiSearch/></span>
          <input id="wd-search-assignment"
            className="form-control me-1"
            placeholder="Search for Assignments" />
        </div>
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-list list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignments-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS 
            <IoEllipsisVerticalSharp className="me-2 fs-3 float-end"/>
            <FaPlus className="position-relative me-2 float-end fs-3" />
            <div className="me-5 float-end border px-2 rounded-5"> 40% of Total</div>
          </div>
          <ul id="wd-assignment-list" className="list-group rounded-0">
            {assignments
              .filter((assignment : any) => assignment.course === cid)
              .map((assignment : any) => {
                // Format the date as "Month Day"
                const options: Intl.DateTimeFormatOptions = {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour12: true // Use 12-hour clock with AM/PM notation
                };
                const aid = assignment._id;

                return (
                <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                  <div className="row">
                    <div className="col-1 align-self-center">
                      <BsGripVertical className="me-2 fs-3" />
                    </div>
                    <div className="col-1 align-self-center">
                      <FaFilePen className="me-2 fs-3 text-success"/>
                    </div>
                    <div className="col-8 p-3">
                      <Link className="wd-assignment-link"
                        to={`/Kanbas/Courses/${cid}/Assignments/edit/${aid}`}
                        >
                        {assignment.title}
                      </Link>

                      <p className="fs-6">
                        <span className="text-danger">Multiple Modules</span> | 
                        <b>Not Avaliable Until </b> 
                        {new Date(assignment.availableFrom).toLocaleDateString("en-US", options)} | 
                        <b> Due </b> 
                        {new Date(assignment.dueDate).toLocaleDateString("en-US", options)} | 
                        {assignment.points} pts
                      </p>
                    </div>
                    <div className="col-2 align-self-center">
                      <FaTrash className="text-danger me-2 mb-1"
                              style={{ cursor: 'pointer' }} 
                              data-bs-toggle="modal" 
                              data-bs-target={`#wd-delete-assignment-dialog-${aid}`} />
                      <LessonControlButtons />
                      <DeleteDialog aId = {aid} deleteAssignment={ (aId) => dispatch(deleteAssignment(aId)) }/>
                    </div>
                  </div>
                </li>
            )})}
          </ul>
        </li>
      </ul>
    </div>
);}
