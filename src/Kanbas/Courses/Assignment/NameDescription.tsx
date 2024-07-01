export default function NameDescription({assignment, handleChange} : any) {
  return (
    <div>
      <label htmlFor="wd-name" className="form-label">Assignment Name</label>
      <input id="wd-name" className="form-control" name="title"
             onChange={handleChange}
             defaultValue={assignment?.title || "New assignment" } /><br />
      <label htmlFor="wd-description" className="form-label">Description</label>
      <textarea id="wd-description" 
                className="form-control" 
                name="description"
                cols={30} rows={10} 
                onChange={handleChange}
                defaultValue={assignment?.description || "New assignment description"} />
      <br />
    </div>
  )
}