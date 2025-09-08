import React, { useState } from 'react'
import { useAppContext } from './App'
const Person = ({ id, name, age, image }) => {
  const { people, setPeople } = useAppContext()
  return (
    <article className="person" key={id}>
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
      <button
        style={{ marginTop: '10px' }}
        type="button"
        className="btn  btn-block"
        onClick={() => setPeople(people.filter((person) => person.id !== id))}
      >
        Remove
      </button>
    </article>
  )
}

export default Person
