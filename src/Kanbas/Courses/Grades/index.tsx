import { LiaFileImportSolid, LiaCogSolid, LiaFileExportSolid } from "react-icons/lia";
import { CiSearch, CiFilter } from "react-icons/ci";

export default function Grades() {
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
            <tr className="table-secondary align-middle"><th>Student Name</th><th>A1 SETUP <br />Out of 100</th><th>A2 HTML <br />Out of 100</th>
              <th>A3 CSS <br /> Out of 100</th><th>A4 BOOTSTRAP <br />Out of 100</th></tr>
          </thead>
          <tbody>
            <tr className="table-white"><td>Jane Adams</td><td>100</td><td><input value="99" className="text-center"/></td><td>85</td><td>85</td></tr>
            <tr className="table-secondary"><td>Christina Allen</td><td>88</td><td>99</td><td>90</td><td>85</td></tr>
            <tr className="table-white"><td>Samreen Ansari</td><td>90</td><td>78</td><td>85</td><td>90</td></tr>
            <tr className="table-secondary"><td>Han Bao</td><td>99</td><td>85</td><td>88</td><td>90</td></tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}