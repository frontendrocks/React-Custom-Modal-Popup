import React from 'react'
import './Modal.css'
const Model = ({handleModel, showModel}) => {

    const openModel = (dataBoolean) => {
        handleModel(dataBoolean);
    }

  return (
    <>
          <div className={showModel ? 'modalOuter' : 'hideModal'}>
              <div className='modal-content'>
                <button class="close" onClick={() => openModel(false)} >&times;</button>
                  Modal Content
              </div>
          </div>
          <button onClick={() => openModel(true)}>Click to Open Model</button>
    </>
  )
}

export default Model
