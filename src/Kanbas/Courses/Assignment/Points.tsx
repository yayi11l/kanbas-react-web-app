export default function Points({assignment, handleChange} : any) {
  return (
    <div className="row mb-3">
      <label htmlFor="wd-points" className="col-sm-2 col-form-label">
        Points </label>
      <div className="col-sm-9">
      <input className="form-control" 
             id="wd-points" 
             name="points"
             onChange={handleChange}
             defaultValue={assignment?.points || 100}/>
      </div> 
    </div>
  )
}