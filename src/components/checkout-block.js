import React, { useState } from 'react'

import PropTypes from 'prop-types'

import InputCheckout from './input-checkout'
import InputCheckoutSmall from './input-checkout-small'
import InputTextarea from './input-textarea'
import ButtonMedium from './button-medium'
import './checkout-block.css'

const CheckoutBlock = (props) => {
  const [isSPB, setIsSPB] = useState(false)
  return (
    <div className={`checkout-block-container ${props.rootClassName} `}>
      <div className="checkout-block-container01">
        <span className="checkout-block-text TextStyle1Bold">
          <span className="">Оформление заказа</span>
          <br className=""></br>
        </span>
        <div className="checkout-block-container02">
          <span className="checkout-block-text03 TextStyle1Bold">
            <span className="">Адрес</span>
            <br className=""></br>
          </span>
          <InputCheckout
            inputName="Улица"
            rootClassName="input-checkout-root-class-name"
            inputPlaceholder="ул. Пушкина"
            className=""
          ></InputCheckout>
          <div className="checkout-block-container03">
            <InputCheckoutSmall
              inputName="Здание"
              rootClassName="input-checkout-small-root-class-name"
              inputPlaceholder="д. 13"
              className=""
            ></InputCheckoutSmall>
            <InputCheckoutSmall
              inputName="Квартира"
              rootClassName="input-checkout-small-root-class-name1"
              inputPlaceholder="121"
              className=""
            ></InputCheckoutSmall>
          </div>
        </div>
        <div className="checkout-block-container04">
          <span className="checkout-block-text06 TextStyle1Bold">
            <span className="">Способ оплаты</span>
            <br className=""></br>
          </span>
          <div className="checkout-block-container05">
            <div className="checkout-block-container06">
              <input
                type="radio"
                name="buyChoice"
                value="СБП"
                checked="true"
                className="radio-button"
              />
              <span className="checkout-block-text09 TextStyle1">
                <span className="TextStyle1">СБП</span>
                <br className=""></br>
              </span>
            </div>
            <div className="checkout-block-container07">
              <input
                type="radio"
                name="buyChoice"
                value="Наличными"
                className="radio-button"
              />
              <span className="checkout-block-text12 TextStyle1">
                <span className="TextStyle1">Наличными</span>
                <br className=""></br>
              </span>
            </div>
            <div className="checkout-block-container08">
              <input
                type="radio"
                name="buyChoice"
                value="Картой при получении"
                className="radio-button"
              />
              <span className="checkout-block-text15">
                <span className="TextStyle1">Картой при получении</span>
                <br className="TextStyle1"></br>
              </span>
            </div>
          </div>
          <div className="checkout-block-container09">
            <div className="checkout-block-container10">
              <input
                type="checkbox"
                name="usePoints"
                value="usePoints"
                className="checkout-block-checkbox"
              />
              <span className="checkout-block-text18 TextStyle1">
                <span className="TextStyle1">Использовать Баллы</span>
                <br className="TextStyle1"></br>
              </span>
            </div>
            <span className="checkout-block-text21 TextStyle1">
              {props.pointsAmount}
            </span>
          </div>
        </div>
        <div className="checkout-block-container11">
          <span className="checkout-block-text22 TextStyle1Bold">
            <span className="">Комментарий</span>
            <br className=""></br>
          </span>
          <InputTextarea
            inputCols="28"
            inputName="Комментарий"
            inputRows="3"
            rootClassName="input-textarea-root-class-name1"
            inputPlaceholder="Звонить в левый дверной звонок"
            className=""
          ></InputTextarea>
        </div>
        <ButtonMedium
          text="Оформить заказ"
          rootClassName="button-medium-root-class-name9"
          className=""
        ></ButtonMedium>
      </div>
      {isSPB && (
        <div className="checkout-block-container12">
          <div className="checkout-block-container13"></div>
          <div className="checkout-block-container14">
            <span className="checkout-block-text25 TextStyle1Bold">
              <span className="">Оплата</span>
              <br className=""></br>
            </span>
            <span className="checkout-block-text28 TextStyle1">
              Переход к оплате заказа по СПБ
            </span>
            <ButtonMedium
              text="Переход к оплате"
              rootClassName="button-medium-root-class-name10"
              className=""
            ></ButtonMedium>
          </div>
        </div>
      )}
    </div>
  )
}

CheckoutBlock.defaultProps = {
  rootClassName: '',
  pointsAmount: '123 Б',
}

CheckoutBlock.propTypes = {
  rootClassName: PropTypes.string,
  pointsAmount: PropTypes.string,
}

export default CheckoutBlock
