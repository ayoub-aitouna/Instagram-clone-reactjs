/* eslint-disable react/jsx-pascal-case */
import React from "react";
import style from "./css/Recent.module.css";
import * as Icon_gr from "react-icons/gr";

function Recent_Sr(props) {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img
          src="https://images.pexels.com/photos/4717019/pexels-photo-4717019.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
        />
      </div>{" "}
      <div className={style.username}>
        <h5> {props.username} </h5>{" "}
      </div>{" "}
      <div className={style.fullname}>
        <p> {props.fullname} </p>{" "}
      </div>{" "}
      <div className={style.close}>
        <Icon_gr.GrClose />
      </div>{" "}
    </div>
  );
}

export default Recent_Sr;
