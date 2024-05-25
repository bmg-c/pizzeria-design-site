import React from "react";

import { Helmet } from "react-helmet";

import NavigationBarFixed from "../components/navigation-bar-fixed";
import InputMedium from "../components/input-medium";
import ButtonSmall from "../components/button-small";
import ButtonMedium from "../components/button-medium";
import Footer from "../components/footer";
import PopupWindowUser from "../components/popup-window-user";
import DialogBox from "../components/dialog-box";
import "./personal.css";

const Personal = (props) => {
  const dialog_box1 = "dialog-box-step1";
  return (
    <div className="personal-container">
      <Helmet>
        <title>Personal - IPS</title>
        <meta property="og:title" content="Personal - IPS" />
      </Helmet>
      <DialogBox
        id={dialog_box1}
        clickFunction={() => {
          document.location.href = "/personal";
        }}
        titleText={"Персональные данные"}
        inputName={"Новое имя"}
        inputPlaceholder={"Андрей2"}
        buttonText={"Сохранить"}
      ></DialogBox>
      <NavigationBarFixed rootClassName="navigation-bar-fixed-root-class-name2"></NavigationBarFixed>
      <PopupWindowUser
        rootClassName="popup-window-user-root-class-name"
        style={{ top: "60px", right: "0px", display: "none" }}
      ></PopupWindowUser>
      <span className="TextStyle1Bold page-title">Личный кабинет</span>
      <div className="personal-container1">
        <div className="personal-container2">
          <InputMedium
            inputName="Имя"
            rootClassName="input-medium-root-class-name2"
            inputPlaceholder="Андрей"
            disabled={true}
          ></InputMedium>
          <ButtonSmall
            imageSrc="/pen.svg"
            rootClassName="button-small-root-class-name5"
            clickFunction={() => {
              document.getElementById(dialog_box1).style.display = "flex";
              document.body.style.overflow = "hidden";
            }}
          ></ButtonSmall>
        </div>
        <InputMedium
          inputName="Номер телефона"
          rootClassName="input-medium-root-class-name3"
          inputPlaceholder="+7 (700) 123 45-67"
          disabled={true}
        ></InputMedium>
        <span className="personal-text1 TextStyle1">Баллы: 123 Б</span>
      </div>
      <div className="personal-container3">
        <ButtonMedium
          text="Выйти"
          rootClassName="button-medium-root-class-name6"
          clickFunction={() => {
            document.location.href = "/";
          }}
        ></ButtonMedium>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  );
};

export default Personal;
