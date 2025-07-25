/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'
import { useFetch } from './hooks'
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

const url = `${import.meta.env.VITE_API_URL}/tickets`

function App() {
  const { data, loading, error } = useFetch(url)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h1>Tickets</h1>
      <ul>
        {data?.map((ticket: any) => (
          <li key={ticket.id}>
            {/* Suponiendo que cada ticket tiene un atributo 'title' o 'name' */}
            {`Ticket : ${ticket.atributes.title || ticket.id}`}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App