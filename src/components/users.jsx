import React from 'react'

function Users(props) {
  return (
    <div className='container'>
        <div className='main'>
            <div>
                <img src={props.picture} />
            </div>
            <div className='details'>
                <p>{props.id}</p>
                <p>
                    <span>{props.title}</span>
                    <span>{props.firstName}</span>
                    <span>{props.lastName}</span>
                </p>
            </div>
        </div>
    </div>
  )
}
export default Users