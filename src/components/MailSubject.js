import React from 'react'

const MailSubject = ({props, acronym}) => {
  return (
    <div className='flex-div'>
        <div className="circle text-white d-flex justify-content-center">
          <p className='mx-auto'>{acronym}</p>
        </div>
        <div className='fluid'>
            <small className='d-block '> From: {props} </small>
        </div>
    </div>
  )
}

export default MailSubject