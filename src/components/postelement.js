/* eslint-disable react/jsx-pascal-case */
import React from "react";
import style from "./css/post.module.css";
import * as Icon_bs from "react-icons/bs";
import * as Icon_vs from "react-icons/vsc";
import * as Icon_fa from "react-icons/fa";
import * as Icon_fi from "react-icons/fi";
import * as Icon_gr from "react-icons/gr";

function postelement(props) {
  return (
    <div className={style.post_parent}>
      <div className={style.img}>
        <img
          src="https://images.pexels.com/photos/7297470/pexels-photo-7297470.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
        />
      </div>{" "}
      <div className={style.username}> {props.username} </div>{" "}
      <div className={style.menu}>
        <Icon_bs.BsThreeDots />
      </div>{" "}
      <div className={style.post_img}>
        <img src={props.postImgURI} alt="" />
      </div>{" "}
      <div className={style.deatils}>
        <div className={style.heart}>
          <Icon_bs.BsHeart />
        </div>{" "}
        <div className={style.commint}>
          <Icon_fa.FaRegComment />
        </div>{" "}
        <div className={style.share}>
          <Icon_fi.FiSend />
        </div>{" "}
        <div className={style.save}>
          <Icon_vs.VscSave />
        </div>{" "}
        <div className={style.NumberLike}> 1500 likes </div>{" "}
        <div className={style.commints}> </div>{" "}
        <div className={style.emoji}>
          <Icon_gr.GrEmoji />
        </div>{" "}
        <div className={style.add_commit}>
          <input type="text" placeholder="add you comment" />
        </div>{" "}
        <div className={style.post_commit}> Post </div>{" "}
      </div>{" "}
    </div>
  );
}

export default postelement;
