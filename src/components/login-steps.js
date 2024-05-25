import React, { useState } from 'react'

import DialogBox from './dialog-box'
import './login-steps.css'

const LoginSteps = (props) => {
  const [stepNumber, setStepNumber] = useState(1)
  return (
    <div className="login-steps-container">
      {stepNumber === 1 && (
        <div className="login-steps-container1">
          <DialogBox
            inputName="Номер телефона"
            smallText="Продолжая, Вы принимаете условия Пользовательского соглашения и Политики конфиденциальности"
            titleText="Вход"
            buttonText="Вход"
            rootClassName="dialog-box-root-class-name"
            inputPlaceholder="+7 (700) 123 45-67 "
          ></DialogBox>
        </div>
      )}
      {stepNumber === 2 && (
        <div className="login-steps-container2">
          <DialogBox
            inputName="Введите код отправленый на +7 (777) 777 77-77"
            smallText="Продолжая, Вы принимаете условия Пользовательского соглашения и Политики конфиденциальности"
            titleText="Вход"
            buttonText="Продолжить"
            rootClassName="dialog-box-root-class-name1"
            inputPlaceholder="123456"
          ></DialogBox>
        </div>
      )}
    </div>
  )
}

export default LoginSteps
