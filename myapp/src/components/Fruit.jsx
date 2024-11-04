import React from 'react'

export default function Fruit({name,id,price}) {
  return (
    <ol> 
        {id}{name}{price}
    </ol>
  )
}
