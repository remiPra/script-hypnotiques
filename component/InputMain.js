import React from 'react'

function InputMain(props) {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
          <input id="inputSearch" className='inputBox' onChange={e => props.onsearch(e.target.value)}
                                type="text" placeholder="rechercher" />
    </div>
  )
}

export default InputMain