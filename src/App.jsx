import React, { useState } from 'react'
import data from './data'

const App = () => {
  const [people, setPeople] = useState(data)

  return (
    <>
      <h2>Birthday Reminder - Starter</h2>
      {people.map((person) => {
        const { id, name, age, image } = person
        return (
          <div key={id}>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        )
      })}
    </>
  )
}
export default App
