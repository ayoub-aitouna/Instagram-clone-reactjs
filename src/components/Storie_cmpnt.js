import React from "react";
import style from "./css/Stories.module.css";
function Storie_cmpnt(props) {
  return (
    <div className={style.parent}>
      <div className={style.img}>
        <img
          src="https://images.pexels.com/photos/4717019/pexels-photo-4717019.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
        />
      </div>
      <div className={style.username}>
        <p>
          {props.username.length > 8
            ? props.username.slice(0, 8) + ".."
            : props.username}
        </p>
      </div>
    </div>
  );
}

export default Storie_cmpnt;
