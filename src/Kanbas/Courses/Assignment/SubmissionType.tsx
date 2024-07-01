export default function SubmissionType({assignment} : any) {
  return (
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
  )
}