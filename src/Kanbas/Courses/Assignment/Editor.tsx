import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  const assignment = assignments.find((assignment) => assignment.course === cid && assignment._id === aid);

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="form-label">Assignment Name</label>
      <input id="wd-name" className="form-control" defaultValue={assignment?._id} /><br />
      <textarea id="wd-description" className="form-control" cols={30} rows={10} defaultValue={assignment?.description || ""} />
      <br /><br />
      <form>
        <div className="row mb-3">
          <label htmlFor="wd-points" className="col-sm-2 col-form-label">
            Points </label>
          <div className="col-sm-9">
            <input className="form-control" id="wd-points" defaultValue={assignment?.points}/>
          </div> 
        </div>
        <div className="row mb-3">
          <label htmlFor="wd-group" className="col-sm-3 col-form-label">
            Assignment Group </label>
          <div className="col-sm-8">
            <select className="form-select" id="wd-group" defaultValue={assignment?.assignmentGroup}>
              <option value="Assignments">Assignments</option>
              <option value="Projects">Projects</option>
              <option value="Quizzes">Quizzes</option>
              <option value="Exams">Exams</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="wd-display-grade-as" className="col-sm-3 col-form-label">
            Display Grade As </label>
          <div className="col-sm-8">
            <select className="form-select" id="wd-display-grade-as" defaultValue={assignment?.displayGradeAs}>
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label">
            Submission Type </label>
          <div className="col-sm-8 border p-2 rounded-2">
            <select className="form-select" id="wd-submission-type" defaultValue={assignment?.submissionType}>
              <option value="Online">Online</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <br />
            <label>Online Entry Options</label><br/><br />
            <input className="form-check-input me-1" type="checkbox" 
                 id="wd-text-entry" 
                 checked={assignment?.onlineEntryOptions?.textEntry || false}/>
            <label className="form-check-label" htmlFor="wd-text-entry">
            Text Entry </label><br /><br />
              <input className="form-check-input me-1" type="checkbox" 
                  id="wd-website-url" 
                  checked={assignment?.onlineEntryOptions?.websiteUrl || false}/>
            <label className="form-check-label" htmlFor="wd-website-url">
            Website URL </label><br /><br />
              <input className="form-check-input me-1" type="checkbox" 
                  id="wd-media-recordings" 
                  checked={assignment?.onlineEntryOptions?.mediaRecordings || false}/>
            <label className="form-check-label" htmlFor="wd-media-recordings">
            Media Recordings </label><br /><br />
              <input className="form-check-input me-1" type="checkbox" 
                  id="wd-student-annotation" 
                  checked={assignment?.onlineEntryOptions?.studentAnnotation || false}/>
            <label className="form-check-label" htmlFor="wd-student-annotation">
            Student Annotation </label><br /><br />
              <input className="form-check-input me-1" type="checkbox" 
                  id="wd-file-upload" 
                  checked={assignment?.onlineEntryOptions?.fileUpload || false}/>
            <label className="form-check-label" htmlFor="wd-file-upload">
            File Uploads </label><br /><br />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="wd-assign" className="col-sm-3 col-form-label">
            Assign </label>
          <div className="col-sm-8 border p-2 rounded-2">
            <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
            <input id="wd-assign-to" className="form-control" value="Everyone" /><br />
          
            <label htmlFor="wd-due-date">Due</label>
            <input 
              id="wd-due-date" 
              className="form-control" 
              type="datetime-local" 
              value={assignment?.dueDate}/><br />
            <div className="row">
              <div className="col-6">
                <label htmlFor="wd-available-from">Avaliable from</label>
                <input 
                  id="wd-available-from"
                  className="form-control" 
                  type="datetime-local" 
                  value={assignment?.availableFrom}/>
              </div>
              <div className="col-6">
                <label htmlFor="wd-available-until">Until</label>
                <input 
                  id="wd-available-until" 
                  className="form-control" 
                  type="datetime-local"
                  value={assignment?.availableUntil}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <br />
      <hr />
      <div style={{display: 'flex', justifyContent: 'right'}}>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-1"> Cancle </Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger"> Save </Link>
      </div>
      
    </div>
);}
