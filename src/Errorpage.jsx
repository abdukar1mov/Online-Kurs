import React from 'react'
import "./errorpage.scss"
import gif from "./images/ErrorPage.gif"

const ErrorPage = () => {
  return (
    <div className='errorPage'>
      <div className="errBox">
        <img src={gif} alt="Error_Gif" />
      </div>
    </div>
  )
}

export default ErrorPage;
