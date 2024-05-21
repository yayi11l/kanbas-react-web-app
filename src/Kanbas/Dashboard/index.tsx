export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="logo512.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="logo512.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5800/Home">
              CS5800 Algorithms
            </a>
            <p className="wd-dashboard-course-title">
             Advanced Algorithms
            </p>
            <a href="#/Kanbas/Courses/5800/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="logo512.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5700/Home">
              CS5700 Computer Networks
            </a>
            <p className="wd-dashboard-course-title">
             Introduces Computer Networks
            </p>
            <a href="#/Kanbas/Courses/5700/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="logo512.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5200/Home">
              CS5200 Database Management
            </a>
            <p className="wd-dashboard-course-title">
             Introduces Database
            </p>
            <a href="#/Kanbas/Courses/5200/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="logo512.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5008/Home">
              CS5008 Object-Oriented Programming
            </a>
            <p className="wd-dashboard-course-title">
             Introduces the  Object-Oriented Programming based on Java
            </p>
            <a href="#/Kanbas/Courses/5008/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="logo512.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5100/Home">
              CS5100 Foundations of Artificial Intelligence
            </a>
            <p className="wd-dashboard-course-title">
              Introduces the fundamental problems, theories, and algorithms of the artificial intelligence field.
            </p>
            <a href="#/Kanbas/Courses/5100/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="logo512.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5100/Home">
              CS 5310 Computer Graphics
            </a>
            <p className="wd-dashboard-course-title">
            Introduces the fundamentals of two-dimensional and three-dimensional computer graphics, 
            with an emphasis on approaches for obtaining realistic images.
            </p>
            <a href="#/Kanbas/Courses/5310/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
);}
