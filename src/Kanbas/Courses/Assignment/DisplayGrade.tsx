export default function DisplayGrade({assignment} : any) {
  return (
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
  )
}