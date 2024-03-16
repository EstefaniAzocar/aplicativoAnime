import { SearchContainer } from './index.js';

function SearchForm({ search, setSearch, getData }) {
  const handleSearch = () => {
    // Verificar si hay texto en el campo de búsqueda antes de llamar a getData
    if (search.trim() !== '') {
      getData();
      // Limpiar el mensaje de error cuando se realiza una búsqueda exitosa
      document.getElementById('errorMessage').innerText = '';
    } else {
      // Mostrar el mensaje debajo del input
      document.getElementById('errorMessage').innerText = 'Por favor, escriba un título.';
    }
  };

  const handleKeyPress = (event) => {
    // Verificar si la tecla presionada es "Enter" (código 13)
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (event) => {
    // Limpiar el mensaje de error cuando se escribe en el campo de búsqueda
    document.getElementById('errorMessage').innerText = '';
    setSearch(event.target.value);
  };

  return (
    <div>
      <SearchContainer>
        <input
          className="search_input"
          type="text"
          value={search}
          onChange={handleChange} // Modificado para limpiar el mensaje de error
          placeholder="Ingresa título"
          onKeyPress={handleKeyPress} // Agregar el listener para la tecla "Enter"
        />
        <button className="search_btn" onClick={handleSearch}>Buscar</button>
      </SearchContainer>
      
      <p id="errorMessage" style={{ color: 'red', marginLeft: '10px' }}></p> 
    </div>
  );
}

export default SearchForm;



