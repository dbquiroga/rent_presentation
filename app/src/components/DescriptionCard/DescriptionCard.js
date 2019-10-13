import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from '@components/Button'
import './DescriptionCard.css'
import { navigate } from 'gatsby'

function DescriptionCard({ noCrown, 
  noButton, 
  longDescription, 
  titleStyle, 
  title = 'Buscamos alquiler amoblado. </br> 2 hab.', 
  description = '¡Buscamos por Alto Alberdi!👋</br> Alquiler amoblado o semiamoblado. Departamento o casa.</br> Telefono de contacto: <a id="link-wsp"href="https://api.whatsapp.com/send?phone=+5493517542925&text=Te%20encontre%20desde%20tu%20pagina.%20tengo%20una%20opcion.">Escribi por wspp</a>'
}) {
  return (
    <div className="card-container">
      {
        !noCrown &&
        <div className="horizontal-line" />
      }
      <h1 dangerouslySetInnerHTML={{__html: title}} className="title" style={titleStyle}></h1>
      <p dangerouslySetInnerHTML={{__html: description}} className={classnames('description', { 'description-long': longDescription })}></p>
      {
        !noButton &&
        <>
        <h4 className="sub-title">Comentarios sobre nosotros:</h4>
        <Button className="action-btn" type={'secondary'} size={'large'} onClick={() => navigate('/collections')}> Airbnb → </Button>
        <Button className="action-btn" type={'secondary'} size={'large'} onClick={() => navigate('/collections')}> Couchsurfing → </Button>
        </>
      }
    </div>
  )
}

export default DescriptionCard