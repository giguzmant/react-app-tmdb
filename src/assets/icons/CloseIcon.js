import React from 'react';

const CloseIcon = ({setSearchActive}) => {
  return(
    <div style={{padding: '37px'}} onClick={setSearchActive}>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="#ffffff" padding="37px" >
          <g fill="none"  stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5">
            <path d="M.75.75l13.5 13.5M14.25.75L.75 14.25">
            </path>
          </g>
      </svg>
    </div>
  )
}

export default CloseIcon;