import { FaPlus, FaBan } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-m btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>
      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-publish-all-btn" className="btn btn-m btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all modules and items
              </a>
          </li>
          <li>
            <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>
          <li>
            <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
              <FaBan className="me-1 fs-6" style={{ top: "2px" }}/>
              Unpublish all modules
            </a>
          </li>
          <li>
            <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
              <FaBan className="me-1 fs-6" style={{ top: "2px" }}/>
              Unpublish modules only
            </a>
          </li>
        </ul>
      </div>
      <button id="wd-modules-btn" value="View Progress" className="btn btn-m btn-secondary me-1 float-end">
        View Progress
      </button>
      <button id="wd-modules-btn" value="View Progress" className="btn btn-m btn-secondary me-1 float-end">
      Collapse All
      </button>
      {/* Implement the View Progress and Collapse All buttons
          with IDs wd-view-progress and wd-collapse-all */}
    </div>
  );
}
