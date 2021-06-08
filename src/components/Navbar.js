/* eslint-disable react/jsx-pascal-case */
import { useState, useRef, useEffect } from "react";
import { Recent_Sr } from "./index";
import { Link } from "react-router-dom";
import * as Icon_Ri from "react-icons/ri";
import * as Icon_ai from "react-icons/ai";
import * as Icon_cg from "react-icons/cg";
import * as Icon_bs from "react-icons/bs";
import * as Icon_vsc from "react-icons/vsc";
import * as Icon_io from "react-icons/io";
import "./navbar.css";

function useOutsideRecent(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

/**
 * Component that alerts if you click outside of it
 */
function Navbar(props) {
  const [Pmenu, setPmenu] = useState(false);
  const [location, setlocation] = useState(props.path_code);
  const [useRecent, setuseRecent] = useState(false);

  const srRecentContainer = useRef(null);
  const searchBar = useRef(null);
  const profileRef = useRef(null);
  const [windowWidth] = useState(window.innerWidth);

  useOutsideRecent(profileRef, () => {
    setPmenu(false);
  });
  useOutsideRecent(srRecentContainer, (event) => {
    if (searchBar.current && !searchBar.current.contains(event.target)) {
      setuseRecent(false);
    }
  });
  const showProfileMenu = () => {
    setPmenu(!Pmenu);
    if (windowWidth > 480) setlocation(4);
  };
  const Searclick = () => setuseRecent(true);
  useEffect(() => {
    setlocation(props.path_code);
  }, [props.path_code]);

  return (
    <div>
      <div className="nav-bar">
        <ul className="nav-bar-ul">
          <li className="nav-bar-li">
            <Link to={`/`}>
              <div className="nav-bar-icon-title">
                <img
                  alt="Instagram"
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png%202x"
                />
              </div>{" "}
            </Link>{" "}
          </li>{" "}
          <li className="nav-bar-li" ref={searchBar}>
            <div className="search-bar">
              <input
                onClick={() => Searclick()}
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <div className="S-icon-close">
                <Icon_io.IoIosCloseCircleOutline
                  className="S-icon-search"
                  onClick={() => {
                    setuseRecent(false);
                  }}
                />{" "}
              </div>{" "}
              <div
                className={
                  useRecent ? "nb-li-sr-container active" : "nb-li-sr-container"
                }
                ref={srRecentContainer}
              >
                <div className="recent-container">
                  <p> Recent </p> <p className="nv-sr-clear"> Clear All </p>
                </div>{" "}
                <div className="nb-Recent-container">
                  <ul className="nb-recent-ul">
                    <li className="nb-recent-li">
                      <Recent_Sr username="ayoub" fullname="Ayoub aitouna" />
                    </li>{" "}
                    <li className="nb-recent-li">
                      <Recent_Sr username="ayoub" fullname="Ayoub aitouna" />
                    </li>{" "}
                    <li className="nb-recent-li">
                      <Recent_Sr username="ayoub" fullname="Ayoub aitouna" />
                    </li>{" "}
                    <li className="nb-recent-li">
                      <Recent_Sr username="ayoub" fullname="Ayoub aitouna" />
                    </li>{" "}
                    <li className="nb-recent-li">
                      <Recent_Sr username="ayoub" fullname="Ayoub aitouna" />
                    </li>{" "}
                    <li className="nb-recent-li">
                      <Recent_Sr username="ayoub" fullname="Ayoub aitouna" />
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
              <div className="S-icon">
                <Icon_bs.BsSearch className="S-icon-search" />
              </div>{" "}
            </div>{" "}
          </li>{" "}
          <li className="nav-bar-li">
            <ul className="nav-routs-ul">
              <li className="nav-routs-li">
                <Link to="/">
                  {" "}
                  {location === 0 ? (
                    <Icon_Ri.RiHomeFill className="nav-bar-icon" />
                  ) : (
                    <Icon_Ri.RiHomeLine className="nav-bar-icon" />
                  )}{" "}
                </Link>{" "}
              </li>{" "}
              <li className="nav-routs-li">
                {windowWidth <= 480 ? (
                  <Link to="/Search">
                    {location === 5 ? (
                      <Icon_Ri.RiSearchFill className="nav-bar-icon" />
                    ) : (
                      <Icon_bs.BsSearch className="nav-bar-icon" />
                    )}
                  </Link>
                ) : (
                  <Link to="/messanger">
                    {location === 1 ? (
                      <Icon_Ri.RiSendPlaneFill className="nav-bar-icon" />
                    ) : (
                      <Icon_Ri.RiSendPlaneLine className="nav-bar-icon" />
                    )}
                  </Link>
                )}
              </li>{" "}
              <li className="nav-routs-li">
                <Link to="/explore">
                  {" "}
                  {location === 2 ? (
                    <Icon_ai.AiFillCompass className="nav-bar-icon" />
                  ) : (
                    <Icon_ai.AiOutlineCompass className="nav-bar-icon" />
                  )}{" "}
                </Link>{" "}
              </li>{" "}
              <li
                className="nav-routs-li"
                onClick={() => {
                  if (windowWidth > 480) setlocation(3);
                }}
              >
                {location === 3 ? (
                  windowWidth < 480 ? (
                    <Link to="/notifecations">
                      <Icon_ai.AiFillHeart className="nav-bar-icon" />
                    </Link>
                  ) : (
                    <Icon_ai.AiFillHeart className="nav-bar-icon" />
                  )
                ) : windowWidth < 480 ? (
                  <Link to="/Notification">
                    <Icon_ai.AiOutlineHeart className="nav-bar-icon" />
                  </Link>
                ) : (
                  <Icon_ai.AiOutlineHeart className="nav-bar-icon" />
                )}{" "}
              </li>{" "}
              <li className="nav-routs-li">
                <div
                  className={location === 4 ? "img clicked" : `img`}
                  onClick={() => showProfileMenu()}
                >
                  {windowWidth < 480 ? (
                    <Link to="/Profile">
                      <img
                        src="https://images.pexels.com/photos/4717019/pexels-photo-4717019.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        alt=""
                      />
                    </Link>
                  ) : (
                    <img
                      src="https://images.pexels.com/photos/4717019/pexels-photo-4717019.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                      alt=""
                    />
                  )}{" "}
                </div>{" "}
                <div
                  ref={profileRef}
                  className={
                    Pmenu
                      ? "nav-bar-profile_container active"
                      : "nav-bar-profile_container"
                  }
                >
                  <ul
                    className="navbar-pc-ul"
                    onClick={() => showProfileMenu()}
                  >
                    <li className="nb-pc-li">
                      <Link to="/profile">
                        <div className="nb-pc-li-item">
                          <Icon_cg.CgProfile className="nav-bar-icon" />
                          <p> Profile </p>{" "}
                        </div>{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li className="nb-pc-li">
                      <Link to="/saved">
                        <div className="nb-pc-li-item">
                          <Icon_vsc.VscSave className="nav-bar-icon" />
                          <p> Saved </p>{" "}
                        </div>{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li className="nb-pc-li">
                      <Link to="/Settings">
                        <div className="nb-pc-li-item">
                          <Icon_Ri.RiSettingsLine className="nav-bar-icon" />
                          <p> Setting </p>{" "}
                        </div>{" "}
                      </Link>{" "}
                    </li>{" "}
                    <li className="nb-pc-li">
                      <div className="nb-pc-li-item">
                        <Icon_vsc.VscCompareChanges className="nav-bar-icon" />
                        <p> Switch </p>{" "}
                      </div>{" "}
                    </li>{" "}
                    <li
                      className="nb-pc-li"
                      onClick={() => {
                        props.isLoged();
                      }}
                    >
                      <div className="nb-pc-li-item">
                        <p className="nb-pc-li-item-p"> LogOut </p>{" "}
                      </div>{" "}
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
              </li>{" "}
            </ul>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
}

export default Navbar;
