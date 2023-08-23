import style from './dialogsSearch.module.css'

export const DialogSearch = ({
  search,
  handleSearch, 
}: {
    search: string; 
    handleSearch: (value: string) => void;
  }) => {
  return (
    <div className={style.dialogssearch}>
      <input
        className={style.dialogssearch_input}
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Искать"
      />
    </div>
  )
}
