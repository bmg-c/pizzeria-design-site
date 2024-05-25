import React from 'react'

import PropTypes from 'prop-types'

import './faq-answer.css'

const FAQAnswer = (props) => {
  return (
    <div className={`faq-answer-container ${props.rootClassName} `}>
      <span className="faq-answer-text TextStyle1Bold">{props.question}</span>
      <span className="faq-answer-text1 TextStyle1">{props.answer}</span>
    </div>
  )
}

FAQAnswer.defaultProps = {
  answer: 'Ответ',
  rootClassName: '',
  question: 'Вопрос',
}

FAQAnswer.propTypes = {
  answer: PropTypes.string,
  rootClassName: PropTypes.string,
  question: PropTypes.string,
}

export default FAQAnswer
