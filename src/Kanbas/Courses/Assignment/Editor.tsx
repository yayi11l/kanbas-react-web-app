export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" cols={30} rows={10}>
        The assignment is available online Submit a link to the landing 
        page of your web app running on Netlify.
      </textarea>
      <br /><br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select name="" id="wd-group">
              <option value="Assignments">Assignments</option>

            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
            </select>
            <br /><br />
            
            <label>Online Entry Options</label><br/>

            <input type="checkbox" name="check-online-options" id="wd-text-entry"/>
            <label htmlFor="wd-chkbox-text">Text Entry</label><br/>

            <input type="checkbox" name="check-online-options" id="wd-website-url"/>
            <label htmlFor="wd-chkbox-URL">Website URL</label><br/>

            <input type="checkbox" name="check-online-options" id="wd-media-recordings"/>
            <label htmlFor="wd-chkbox-recording">Media Recordings</label><br/>

            <input type="checkbox" name="check-online-options" id="wd-student-annotation"/>
            <label htmlFor="wd-chkbox-annotation">Student Annotation</label><br />

            <input type="checkbox" name="check-online-options" id="wd-file-upload"/>
            <label htmlFor="wd-chkbox-file">File Uploads</label>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input type="text" id="wd-assign-to" value="Everyone"></input>
            <br /><br />

            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" id="wd-due-date" value="2024-05-13"></input>
            <br /><br />

            <label htmlFor="wd-available-from">Avaliable From</label>
            <br />
            <input type="date" id="wd-available-from" value="2024-05-06"></input>
            {/* <label htmlFor="wd-due-date">Until</label>
            <br />
            <input type="date" id="wd-due-date" value="2024-05-20"></input> */}
          </td>
          <td valign="bottom">
            <label htmlFor="wd-available-until">Until</label>
            <br />
            <input type="date" id="wd-available-until" value="2024-05-20"></input>
          </td>
        </tr>
      </table>
      <hr />
      <div style={{display: 'flex', justifyContent: 'right'}}>
        <button>Cancle</button>
        <button>Save</button>
      </div>
      
    </div>
);}
