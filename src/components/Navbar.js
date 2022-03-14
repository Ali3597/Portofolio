import "./Navbar.css";
import { FaPalette } from "react-icons/fa";
import { useThemeContext } from "../hooks/useThemeContext";
import { Link } from "react-scroll";

export function Navbar({ sticky }) {
  const { setTheme } = useThemeContext();
  return (
    <nav className="navbar">
      <div className="container">
        <div className="name">ALI SALEH</div>
        <div className="anchor">
          <ul>
            <li>
              <Link activeClass="active" to="home" offset={-80} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="skills" offset={-80} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="experience"
                offset={-80}
                smooth={true}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="veille" offset={-80} smooth={true}>
                Veille
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="projects"
                offset={-80}
                smooth={true}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="contact"
                offset={-80}
                smooth={true}
              >
                Contact
              </Link>
            </li>
            <li>Resume</li>
            <li>
              <FaPalette onClick={setTheme} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
