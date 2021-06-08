/* eslint-disable react/jsx-pascal-case */
import { useRef, useState, useEffect } from "react";
import style from "./css/home.module.css";
import { Storie, Post } from "../components";
import { StorieDB } from "../Data/StorieDB";
import * as Icon_gr from "react-icons/gr";

function Home(props) {
  var PostLists = [
    "https://images.pexels.com/photos/7297470/pexels-photo-7297470.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/4173640/pexels-photo-4173640.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/4801672/pexels-photo-4801672.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/6206942/pexels-photo-6206942.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  ];
  const StoriesUl = useRef(null);
  const next = useRef(null);
  const prevoise = useRef(null);
  const [scrolledS, setscrolledS] = useState(0);

  useEffect(() => {
    const maxScroll =
      StoriesUl.current.scrollWidth - StoriesUl.current.clientWidth;
    StoriesUl.current.scrollLeft = scrolledS;

    if (scrolledS <= 500) {
      prevoise.current.style = "display:none";
    } else {
      prevoise.current.style = "display:grid";
    }
    if (scrolledS >= maxScroll) {
      next.current.style = "display:none";
    } else {
      next.current.style = "display:grid";
    }
  }, [scrolledS]);

  const scrollSide = (e) => {
    const maxScroll =
      StoriesUl.current.scrollWidth - StoriesUl.current.clientWidth;
    if (e === 0) {
      if (scrolledS > 500) {
        setscrolledS(scrolledS - 500);
      }
    } else {
      if (scrolledS < maxScroll) {
        setscrolledS(scrolledS + 500);
      }
    }
  };
  props.path();
  return (
    <div className={style.conatiner}>
      <div className={style.stories}>
        <div className={style.st_con}>
          <div
            ref={prevoise}
            className={`${style.st_con_Prev} ${style.st_con_icon}`}
            onClick={() => {
              scrollSide(0);
            }}
          >
            <Icon_gr.GrFormPrevious className={style.r_icon} />
          </div>
          <ul className={style.st_con_ul} ref={StoriesUl}>
            {StorieDB.map((item, index) => {
              return (
                <li key={index} className={style.st_li}>
                  <Storie username={item.username} />
                </li>
              );
            })}
          </ul>
          <div
            ref={next}
            className={`${style.st_con_Next} ${style.st_con_icon}`}
            onClick={() => {
              scrollSide(1);
            }}
          >
            <Icon_gr.GrFormNext className={style.r_icon} />
          </div>
        </div>
      </div>
      <div className={style.post_container}>
        <ul className={style.post_ul}>
          {PostLists.map((item, index) => {
            return (
              <li key={index}>
                <Post username="Asmea kasimy" postImgURI={item} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.profile_details}> </div>
    </div>
  );
}

export default Home;
