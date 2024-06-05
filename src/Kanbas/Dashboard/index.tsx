export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="./Images/react.png" />
              <div className="card-body p-3">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="./Images/react.png" className="card-img-top"/>
              <div className="card-body p-3">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5800/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS5800 Algorithms
                </a>
                <p className="wd-dashboard-course-title card-text">
                Advanced Algorithms
                </p>
                <a href="#/Kanbas/Courses/5800/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="./Images/react.png" className="card-img-top"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5700/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS5700 Computer Networks
                </a>
                <p className="wd-dashboard-course-title card-text">
                Introduces Computer Networks
                </p>
                <a href="#/Kanbas/Courses/5700/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="./Images/react.png" className="card-img-top"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5200/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS5200 Database Management
                </a>
                <p className="wd-dashboard-course-title card-text">
                Introduces Database
                </p>
                <a href="#/Kanbas/Courses/5200/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="./Images/react.png" className="card-img-top"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5008/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS5008 OOP
                </a>
                <p className="wd-dashboard-course-title card-text">
                Introduces OOP(JAVA)
                </p>
                <a href="#/Kanbas/Courses/5008/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="./Images/react.png" className="card-img-top"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5100/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS5100 Artificial Intelligence
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Introduces artificial intelligence
                </p>
                <a href="#/Kanbas/Courses/5100/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="./Images/react.png" className="card-img-top"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5100/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS 5310 Computer Graphics
                </a>
                <p className="wd-dashboard-course-title card-text">
                Introduces computer graphics
                </p>
                <a href="#/Kanbas/Courses/5310/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);}
