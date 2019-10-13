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
  description = '¡Buscamos por la zona! Alquiler amoblado o semiamoblado.Departamento o casa. Presupuesto máximo: $19.000 + gastos.'
}) {
  return (
    <div className="card-container">
      {
        !noCrown &&
        <div className="horizontal-line" />
      }
      <h1 dangerouslySetInnerHTML={{__html: title}} className="title" style={titleStyle}></h1>
      <p className={classnames('description', { 'description-long': longDescription })}>{description}</p>
      {
        !noButton &&
        <>
        <h4 className="sub-title">Comentarios que nos dejaron:</h4>
        <Button className="action-btn" type={'secondary'} size={'large'} onClick={() => navigate('/collections')}> Airbnb → </Button>
        <Button className="action-btn" type={'secondary'} size={'large'} onClick={() => navigate('/collections')}> Couchsurfing → </Button>
        </>
      }
    </div>
  )
}

export default DescriptionCard