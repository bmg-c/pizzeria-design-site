import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import LogoSmall from './logo-small'
import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-container ${props.rootClassName} `}>
      <div className="footer-container01">
        <div className="footer-container02">
          <Link to="/" className="footer-text TextStyle1">
            Наше меню
          </Link>
          <Link to="/faq" className="footer-text1 TextStyle1">
            FAQ
          </Link>
          <Link to="/contacts" className="footer-text2 TextStyle1">
            Контакты
          </Link>
        </div>
        <div className="footer-container03">
          <span className="footer-text3 TextStyle1">Наши соц. сети:</span>
          <a
            href="https://vk.com"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
          >
            <div className="footer-container04">
              <img alt="image" src="/vk.svg" className="footer-image" />
              <span className="footer-text4">ВКонтакте</span>
            </div>
          </a>
          <a
            href="https://ok.ru"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link1"
          >
            <div className="footer-container05">
              <img alt="image" src="/ok.svg" className="footer-image1" />
              <span className="footer-text5 TextStyle1">ОК</span>
            </div>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link2"
          >
            <div className="footer-container06">
              <img alt="image" src="/yt.svg" className="footer-image2" />
              <span className="footer-text6 TextStyle1">YouTube</span>
            </div>
          </a>
        </div>
      </div>
      <div className="footer-container07"></div>
      <div className="footer-container08">
        <div className="footer-container09">
          <LogoSmall
            rootClassName="logo-small-root-class-name"
            className=""
          ></LogoSmall>
          <span className="footer-text7 TextStyle1">
            Пользовательское соглашение
          </span>
        </div>
        <span className="footer-text8 TextStyle1">letalbark@gmail.com</span>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
