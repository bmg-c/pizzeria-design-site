import React from "react";

import { Helmet } from "react-helmet";

import NavigationBarFixed from "../components/navigation-bar-fixed";
import InputMedium from "../components/input-medium";
import InputTextarea from "../components/input-textarea";
import ButtonMedium from "../components/button-medium";
import Footer from "../components/footer";
import PopupWindowUser from "../components/popup-window-user";
import "./contacts.css";

const Contacts = (props) => {
  return (
    <div className="contacts-container">
      <Helmet>
        <title>Contacts - IPS</title>
        <meta property="og:title" content="Contacts - IPS" />
      </Helmet>
      <PopupWindowUser
        rootClassName="popup-window-user-root-class-name"
        style={{ top: "60px", right: "0px", display: "none" }}
      ></PopupWindowUser>
      <NavigationBarFixed rootClassName="navigation-bar-fixed-root-class-name"></NavigationBarFixed>
      <span className="TextStyle1Bold page-title">Адреса пиццерии</span>
      <div className="contacts-container1">
        <span className="contacts-text1 TextStyle1">
          ул. Ватутина, 12 — 09:00-23:00 каждый день
        </span>
        <span className="contacts-text2 TextStyle1">
          ул. Кирова, 113а — 09:00-23:00 каждый день
        </span>
        <span className="contacts-text3 TextStyle1">
          ул. Титова, 258 — 09:00-23:00 каждый день
        </span>
      </div>
      <span className="TextStyle1Bold page-title">
        <span className="TextStyle1Bold">Обратная связь</span>
        <br></br>
      </span>
      <div className="contacts-container2">
        <InputMedium
          inputName="Почта для обратной связи"
          rootClassName="input-medium-root-class-name1"
          inputPlaceholder="email@mail.com"
        ></InputMedium>
        <InputMedium
          inputName="Имя"
          rootClassName="input-medium-root-class-name"
          inputPlaceholder="Андрей"
        ></InputMedium>
        <InputTextarea
          inputName="Сообщение"
          rootClassName="input-textarea-root-class-name"
        ></InputTextarea>
        <ButtonMedium
          text="Отправить"
          rootClassName="button-medium-root-class-name5"
        ></ButtonMedium>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  );
};

export default Contacts;
