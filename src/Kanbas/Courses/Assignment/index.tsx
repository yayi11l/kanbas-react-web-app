import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { FaFilePen } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import "./index.css"

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <br />
      <div>
        <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
        <div className="input-group mb-3 col-3 w-auto">
          <span className="input-group-text"><CiSearch/></span>
          <input id="wd-search-assignment"
            className="form-control me-1 "
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
          <li className="wd-assignment-list-item list-group-item p-3 ps-1">
            <div className="row">
              <div className="col-1 align-self-center">
                <BsGripVertical className="me-2 fs-3" />
              </div>
              <div className="col-1 align-self-center">
                <FaFilePen className="me-2 fs-3 text-success"/>
              </div>
              <div className="col-8 p-3">
                <a className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                  A1 - ENV + HTML
                </a>
                <p className="fs-6"><span className="text-danger">Multiple Modules</span> | <b>Not Avaliable Until</b> May 6 at 12:00 am | <b>Due</b> May 13 at 11:59 pm | 100 pts</p>
              </div>
              <div className="col-2 align-self-center">
                <LessonControlButtons />
              </div>
            </div>
          </li>
          <li className="wd-assignment-list-item list-group-item p-3 ps-1">
            <div className="row">
              <div className="col-1 align-self-center">
                <BsGripVertical className="me-2 fs-3" />
              </div>
              <div className="col-1 align-self-center">
                <FaFilePen className="me-2 fs-3 text-success"/>
              </div>
              <div className="col-8 p-3">
                <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/2">
                A2 - CSS + BOOTSTRAP
                </a>
                <p className="fs-6"><span className="text-danger">Multiple Modules</span> | <b>Not Avaliable Until</b> May 13 at 12:00 am | <b>Due</b> May 20 at 11:59 pm | 100 pts</p>
              </div>
              <div className="col-2 align-self-center">
                <LessonControlButtons />
              </div>
            </div>
          </li>
          <li className="wd-assignment-list-item list-group-item p-3 ps-1">
            <div className="row">
              <div className="col-1 align-self-center">
                <BsGripVertical className="me-2 fs-3" />
              </div>
              <div className="col-1 align-self-center">
                <FaFilePen className="me-2 fs-3 text-success"/>
              </div>
              <div className="col-8 p-3">
                <a className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/3">
                  A3 - JAVASCRIPT + REACT
                </a>
              <p className="fs-6"><span className="text-danger">Multiple Module</span> | <b>Not Avaliable Until</b> May 20 at 12:00 am | <b>Due</b> May 27 at 11:59 pm | 100 pts</p>
              </div>
              <div className="col-2 align-self-center">
                <LessonControlButtons />
              </div>
            </div>
          </li>
        </ul>
        </li>
      </ul>
    </div>
);}
