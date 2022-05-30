import { useState } from 'react'

export default function Pagination({ data, RenderComponent, dataLimit }) {
  const [pages] = useState(Math.ceil(data.length / dataLimit))
  const [currentPage, setCurrentPage] = useState(1)

  function goToNextPage() {
    if (pages > currentPage) {
      setCurrentPage((page) => page + 1)
    }
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1)
    }
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent)
    setCurrentPage(pageNumber)
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return data.slice(startIndex, endIndex)
  }

  const getPaginationGroup = () => {
    let start = 0
    return new Array(Math.ceil(data.length / dataLimit))
      .fill()
      .map((_, idx) => start + idx + 1)
  }

  return (
    <div>
      <div>
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>

      <div>
        <button onClick={goToPreviousPage}>prev</button>

        {getPaginationGroup().map((item, index) => (
          <button key={index} onClick={changePage}>
            <span>{item}</span>
          </button>
        ))}

        <button onClick={goToNextPage}>next</button>
      </div>
    </div>
  )
}
