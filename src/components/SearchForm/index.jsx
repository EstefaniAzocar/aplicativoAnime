import {SearchContainer} from './index.js';


function SearchForm ({search, setSearch, getData}){
  return(
  

      <SearchContainer >
      <input
        className="search_input"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Ingresa titulo"
      />
      <button className="search_btn"onClick={getData}>Buscar</button>
    </SearchContainer>

  );

} export default SearchForm;