/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import style from "./css/auth.module.css";
import * as Icon_ai from "react-icons/ai";

function Authentication(props) {
  const [isSingin, setSingin] = useState(true);
  return (
    <div>
      <div className={style.conatiner}>
        <form className={style.input_container}>
          <div className={style.img_title}>
            <img
              alt="Instagram"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png%202x"
            />
          </div>

          {isSingin ? (
            <>
              <div className={style.inputs_in}>
                <input
                  type="text"
                  placeholder="Phone number, username, or email"
                />
                <input type="text" placeholder="Password" />
                <input
                  type="submit"
                  value="Log In"
                  onClick={(e) => {
                    e.preventDefault();
                    props.isLoged();
                  }}
                />
                <div className={style.other}>
                  <div className={style.withFb}>
                    <Icon_ai.AiFillFacebook className={style.fbIcon} />
                    <p>Log in with Facebook</p>
                  </div>
                  <div className={style.frgpass}>
                    <p>Forgot password?</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={style.withfbup}>
                <h4>Sign up to see photos and videos from your friends.</h4>
                <div className={style.btnWithFb}>
                  <Icon_ai.AiFillFacebook />
                  <p>Log in with Facebook</p>
                </div>
                <p>OR</p>
              </div>
              <div className={style.inputs_up}>
                <input type="text" placeholder="Mobile number or emmail" />
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Sing up" />
                <p className={style.policy}>
                  By signing up, you agree to our Terms , Data Policy and
                  Cookies Policy .
                </p>
              </div>
            </>
          )}
        </form>
        <div className={style.switch_method}>
          {isSingin ? (
            <>
              <p>Don't have an account</p>
              <p
                onClick={() => {
                  //props.isLoged();
                  setSingin(false);
                }}
              >
                Sign up
              </p>
            </>
          ) : (
            <>
              <p>Have an account?</p>
              <p
                onClick={() => {
                  //props.isLoged();
                  setSingin(true);
                }}
              >
                Log in
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Authentication;
