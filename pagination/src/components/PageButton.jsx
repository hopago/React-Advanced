const PageButton = ({ page, setPage, isPreviousData }) => {
  return (
    <button onClick={() => setPage(page)} disabled={isPreviousData}>
        {page}
    </button>
  )
}

export default PageButton
