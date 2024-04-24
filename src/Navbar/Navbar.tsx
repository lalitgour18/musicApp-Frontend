import "./Navbar.scss";
import { FaHome, FaMusic } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import logo from "../assets/logo-removebg-preview.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const {id} = useParams();

  return (
    <>
      <div>
        <div className="navbar-container">
          <ul className="nav-open">
            <img src={logo} />
            <div className="nav-list">
              <li>
                <Link
                  to="/"
                  className={"underline" + (url === "/"  || url === `/musicplay/${id}` ? " active" : "")}
                >
                  <FaHome className="home" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/playlist"
                  className={
                    "underline" + (url === "/playlist" ? " active" : "")
                  }
                >
                  <FaMusic className="home" />
                  Songs
                </Link>
              </li>
              <li>
                <Link
                  to="/create"
                  className={"underline" + (url === "/create" ? " active" : "")}
                >
                  My Playlist
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
