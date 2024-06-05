export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="form-label">Assignment Name</label>
      <input id="wd-name" className="form-control" value="A1 - ENV + HTML" /><br />
      <textarea id="wd-description" className="form-control" cols={30} rows={10}>
        The assignment is available online Submit a link to the landing 
        page of your web app running on Netlify.
      </textarea>
      <br /><br />
      <form>
        <div className="row mb-3">
          <label htmlFor="wd-points" className="col-sm-2 col-form-label">
            Points </label>
          <div className="col-sm-9">
            <input className="form-control" id="wd-points" value={100}/>
          </div> 
        </div>
        <div className="row mb-3">
          <label htmlFor="wd-group" className="col-sm-3 col-form-label">
            Assignment Group </label>
          <div className="col-sm-8">
            <select className="form-select" id="wd-group">
              <option selected value="Assignments">Assignments</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="wd-display-grade-as" className="col-sm-3 col-form-label">
            Display Grade As </label>
          <div className="col-sm-8">
            <select className="form-select" id="wd-display-grade-as">
              <option selected value="Percentage">Percentage</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label">
            Submission Type </label>
          <div className="col-sm-8 border p-2 rounded-2">
            <select className="form-select" id="wd-submission-type">
              <option selected value="Online">Online</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <br />
            <label>Online Entry Options</label><br/><br />
            <input className="form-check-input me-1" type="checkbox" 
                 id="wd-text-entry" />
            <label className="form-check-label" htmlFor="wd-text-entry">
            Text Entry </label><br /><br />
              <input className="form-check-input me-1" type="checkbox" 
                  id="wd-website-url" />
            <label className="form-check-label" htmlFor="wd-website-url">
            Website URL </label><br /><br />
              <input className="form-check-input me-1" type="checkbox" 
                  id="wd-media-recordings" />
            <label className="form-check-label" htmlFor="wd-media-recordings">
            Media Recordings </label><br /><br />
              <input className="form-check-input me-1" type="checkbox" 
                  id="wd-student-annotation" />
            <label className="form-check-label" htmlFor="wd-student-annotation">
            Student Annotation </label><br /><br />
              <input className="form-check-input me-1" type="checkbox" 
                  id="wd-file-upload" />
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
            <input id="wd-due-date" className="form-control" type="date" value="2024-05-13"/><br />
            <div className="row">
              <div className="col">
                <label htmlFor="wd-available-from">Avaliable from</label>
                <input id="wd-available-from" className="form-control col-4" type="date" value="2024-05-13"/>
              </div>
              <div className="col">
                <label htmlFor="wd-available-until">Until</label>
                <input id="wd-available-until" className="form-control col" type="date" value="2024-05-13"/>
              </div>
            </div>
          </div>
        </div>
      </form>
      <br />
      <hr />
      <div style={{display: 'flex', justifyContent: 'right'}}>
        <button className="btn btn-secondary me-1">Cancle</button>
        <button className="btn btn-danger">Save</button>
      </div>
      
    </div>
);}
