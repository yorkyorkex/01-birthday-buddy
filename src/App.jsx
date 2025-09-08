import React, { useState, createContext, useContext } from 'react'
import data from './data'
import List from './List'

export const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

const App = () => {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <AppContext.Provider value={{ people, setPeople }}>
          <List people={people} />
        </AppContext.Provider>
        {people.length > 0 ? (
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPeople([])}
          >
            Clear All
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPeople(data)}
          >
            Reset
          </button>
        )}
      </section>
    </main>
  )
}
export default App
