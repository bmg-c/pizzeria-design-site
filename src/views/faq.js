import React from "react";

import { Helmet } from "react-helmet";

import NavigationBarFixed from "../components/navigation-bar-fixed";
import FAQAnswer from "../components/faq-answer";
import Footer from "../components/footer";
import PopupWindowUser from "../components/popup-window-user";
import "./faq.css";

const FAQ = (props) => {
  return (
    <div className="faq-container">
      <Helmet>
        <title>FAQ - IPS</title>
        <meta property="og:title" content="FAQ - IPS" />
      </Helmet>
      <NavigationBarFixed rootClassName="navigation-bar-fixed-root-class-name1"></NavigationBarFixed>
      <PopupWindowUser
        rootClassName="popup-window-user-root-class-name"
        style={{ top: "60px", right: "0px", display: "none" }}
      ></PopupWindowUser>
      <div className="faq-container1">
        <FAQAnswer
          answer="Обычно люди приходят в Пицца Тайм, чтобы просто поесть. Наши промоутеры раздают листовки про кусочек пиццы за двадцать рублей или ещё что-то  выгодное. Мы делаем это как первый шаг, чтобы познакомиться. Но для нас Пицца Тайм — не только пицца. Это и пицца тоже, но в первую очередь  это большое дело, которое вдохновляет нас, заставляет каждое утро  просыпаться и с интересом продолжать работу."
          question="Кто мы?"
          rootClassName="faq-answer-root-class-name"
        ></FAQAnswer>
        <FAQAnswer
          answer="Цифровые технологии помогают нам вовремя замечать, если что-то идёт неправильно. Но как понять, что правильно, а что нет? Для этого у нас есть стандарты. Вот, например, про мытьё рук: мытье рук необходимо делать всегда — даже когда почесал нос. Наши  стандарты — это не какие-то заумные схемы и формулы, а супер-понятные  правила. У нас их сотни, буквально про всё. Именно так мы умудряемся  делать всё хорошо и одновременно быстро расти."
          question="Стандарты качества?"
          rootClassName="faq-answer-root-class-name2"
        ></FAQAnswer>
        <FAQAnswer
          answer="Кто угодно может написать сотню правил, но само по себе это не работает. Нужна сила, благодаря которой стандарты будут соблюдаться. Для нас этой силой стала открытость. Мы сделали всё настолько прозрачным, что отступать от стандартов просто не получается.  В чём конкретно это проявляется? Открытость: се наши кухни оснащены веб-камерами и любой желающий может посмотреть на процесс приготовления."
          question="Соблюдение стандартов?"
          rootClassName="faq-answer-root-class-name1"
        ></FAQAnswer>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  );
};

export default FAQ;
