import "./index.css"
import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
  
  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link 
          key={link} 
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item border border-0
          ${pathname.includes(link) ? "active" : "text-danger" 
          }`}
        >
          {link}
        </Link>
      ))}
      {/* <a id="wd-course-home-link"    href="#/Kanbas/Courses/1234/Home"
        className="list-group-item active border border-0">Home</a> */}
    </div>
);}
