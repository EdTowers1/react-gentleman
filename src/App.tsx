import { useEffect, useState } from 'react'
import './App.css'
// import { Button } from './components'

// para explicar la funcinalidad del useState
// function App() {
//   const [count, setCount] = useState(0)

//   const handleClick = () => {
//     setCount((count) => count + 1)
//   }

//   return (
//     <>
//       <Button label={`Count is ${count}`} parentCallback={handleClick} />
//     </>
//   )
// }

// export default App

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/tickets`)

      if (!response.ok) {
        throw new Error("Error al obtener los datos: ")
      }

      const json = await response.json()
      setData(json.data)
    } catch (err) {
      setError(err as string)
    } finally {
      setLoading(false)
    }

  }

  // comunicación con un endopoint de la API
  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1>Tickets</h1>
      <ul>
        {data.map((ticket: any) => (
          <li key={ticket.id}>
            {/* Suponiendo que cada ticket tiene un atributo 'title' o 'name' */}
            {ticket.title || `Ticket ID: ${ticket.id}`}
          </li>
        ))}
      </ul>
    </div>
  )


}

export default App