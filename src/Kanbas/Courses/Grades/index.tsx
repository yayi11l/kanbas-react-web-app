import { LiaFileImportSolid, LiaCogSolid, LiaFileExportSolid } from "react-icons/lia";
import { CiSearch, CiFilter } from "react-icons/ci";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function Grades() {
  const { cid } = useParams()
  const users = db.users;
  const grades = db.grades;
  const enrollments = db.enrollments;
  const assignments = db.assignments;

  const registered = enrollments.filter((enrollment) => enrollment.course === cid)
                                .map((enrollment) => enrollment.user);
  const id_assignments = assignments.filter((assignment) => assignment.course === cid)
                                        .map((assignment) => assignment._id);

  return (
    <div>
      <button className="btn btn-md btn-secondary me-1 text-start float-end">
        <LiaCogSolid className="fs-5" />
      </button>
      <div className="dropdown d-inline me-1 float-end">
        <button className="btn btn-md btn-secondary me-1 text-start dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <LiaFileExportSolid className="me-2 fs-5" />
          Export
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-export-btn" className="dropdown-item" href="#">
              Export
            </a>
          </li>
        </ul>
      </div>
      <button className="btn btn-md btn-secondary me-1 text-start float-end">
        <LiaFileImportSolid className="me-2 fs-5" />
        Import
      </button>
      <br /><br /><br />

      <div id="wd-search" className="row">
        <div className="input-group mb-3 col">
          <div className="col-12">
            <label htmlFor="wd-search-students" className="col-form-label me-1 fw-bold">
              Student Names </label>
          </div>
          <span className="input-group-text"><CiSearch/></span>
          <div className="row">
            <input id="wd-search-students"
              className="form-control me-1 col-sm-6"
              placeholder="Search Students" />
          </div>
        </div>
        <div className="input-group mb-3 col">
          <label htmlFor="wd-search-students" className="col-form-label me-1 col-12 fw-bold">
            Assignment Names </label>
          <span className="input-group-text"><CiSearch/></span>
          <div>
            <input id="wd-search-students"
              className="form-control me-1 col-sm-6"
              placeholder="Search Assignments" />
          </div>
        </div>
      </div>

      <div id="wd-filter-btn" className="mb-2">
        <button className="btn btn-md btn-secondary me-1 text-start">
          <CiFilter className="me-2 fs-5" />
          Apply Filters
        </button>
      </div>

      <div id="wd-grades-table">
        <table className="table text-center">
          <thead>
            <tr className="table-secondary align-middle"><th>Student Name</th>
              {id_assignments.map((id) => 
                <th>{id}<br />
                Out of {assignments.find((assignment) => 
                  assignment._id === id)?.points}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {registered.map((user_id, index) => {
              const user = users.find((user) => user._id === user_id);
              return (
                <tr key={index} className={index % 2 === 0 ? "table-white" : "table-secondary"}>
                  <td>{user?.firstName} {user?.lastName}</td>
                  {id_assignments.map((id) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === user_id &&
                        grade.assignment === id
                    )?.grade;
                    return <td key={id}>{grade || "-"}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
    </div>
  )
}