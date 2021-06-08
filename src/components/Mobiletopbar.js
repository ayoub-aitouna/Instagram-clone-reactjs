/* eslint-disable react/jsx-pascal-case */
import { useState, useEffect } from "react";
import style from "./css/Mtop.module.css";
import * as Icon_Ri from "react-icons/ri";
import { Link } from "react-router-dom";

function Mobiletopbar(props) {
  const [location, setlocation] = useState(props.path_code);
  useEffect(() => {
    setlocation(props.path_code);
  }, [props.path_code]);
  return (
    <div>
      <div className={style.parent}>
        <div className={style.logo}>
          <div className={style.insta_icon}>
            <img
              alt="Instagram"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png%202x"
            />
          </div>{" "}
        </div>
        <div className={style.elements}>
          <ul className={style.ul}>
            <li className="mtop_li"></li>
            <li className="mtop_li">
              <Link to="messanger">
                {location === 1 ? (
                  <Icon_Ri.RiSendPlaneFill className={style.mtop_icon} />
                ) : (
                  <Icon_Ri.RiSendPlaneLine className={style.mtop_icon} />
                )}{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mobiletopbar;
