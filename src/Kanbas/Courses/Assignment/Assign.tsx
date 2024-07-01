export default function Assign({assignment, handleChange} : any) {
  return (
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
              name="dueDate"
              onChange={handleChange}
              defaultValue={assignment?.dueDate}/><br />
            <div className="row">
              <div className="col-6">
                <label htmlFor="wd-available-from">Avaliable from</label>
                <input 
                  id="wd-available-from"
                  className="form-control" 
                  type="datetime-local" 
                  onChange={handleChange}
                  name="availableFrom"
                  defaultValue={assignment?.availableFrom}/>
              </div>
              <div className="col-6">
                <label htmlFor="wd-available-until">Until</label>
                <input 
                  id="wd-available-until" 
                  className="form-control" 
                  type="datetime-local"
                  name="availableUntil"
                  onChange={handleChange}
                  defaultValue={assignment?.availableUntil}
                />
              </div>
            </div>
          </div>
        </div>
  )
}