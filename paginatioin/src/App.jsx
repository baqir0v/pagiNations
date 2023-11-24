import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pagePerData, setPagePerData] = useState(2)

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories").then(response => response.json()).then(items => setData(items))
  }, [])
  const pageNumbers = []

  for (let i = 1; i <=Math.ceil(data.length / pagePerData); i++) {
    pageNumbers.push(i)
  }
  const lastElementIndex = currentPage * pagePerData
  const firstElementIndex = lastElementIndex - pagePerData

  const pageDatas = useMemo(() => data.slice(firstElementIndex, lastElementIndex), [data, currentPage]);

  const handlelowtohigh = (e) => {
    e.preventDefault();
    const sortByPrice = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setData([...sortByPrice]);
  };
  const handlehightolow = (e) => {
    e.preventDefault();
    const sortByPrice = [...data].sort((a, b) => b.name.localeCompare(a.name));
    setData([...sortByPrice]);
  };
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th><button onClick={(e)=>handlelowtohigh(e)}>1den</button>
            <button onClick={(e)=>handlehightolow(e)}>8den</button>
            </th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {pageDatas.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {
          pageNumbers.map(page => (
            <button key={page} onClick={() => setCurrentPage(page)}>{page}</button>
          ))
        }
      </div>
    </>
  )
}

export default App
