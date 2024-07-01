export default function Group({assignment} : any) {
  return (
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
  )
}