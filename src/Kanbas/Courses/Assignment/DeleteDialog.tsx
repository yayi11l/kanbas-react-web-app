export default function DeleteDialog({ aId, deleteAssignment }:
  { aId: string; deleteAssignment: (aid: string) => void; }) {
    return (
      <div id={`wd-delete-assignment-dialog-${aId}`} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-center" id="staticBackdropLabel">
                Confirm the delete action</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p className="text-center">Are you sure to delete this assignment?</p>
              {/* <input className="form-control" value={moduleName} placeholder="Module Name"
                     onChange={(e) => setModuleName(e.target.value)}/> */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                No </button>
              <button onClick={() => deleteAssignment(aId)} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                Yes </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  