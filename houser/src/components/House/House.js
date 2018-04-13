import React from 'react'

export default function House(props) {
  let house = props.houseList
  return (
    <div>
      {house}
      <button>Delete</button>
    </div>
  )
}
