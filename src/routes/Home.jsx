import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm/index.jsx';
import './Home.js';
import { MyCarousel } from '../components/Carousel/index.jsx';
import { HomeContainer, SearchContainer } from '/src/routes/Home.js';
import { Card } from '/src/components/Card/index.jsx';

const apiUrl = import.meta.env.VITE_API_URL;


function Home() {
  const [search, setSearch] = useState('');
  const [animeData, setAnimeData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/anime?q=${search}`);
      setAnimeData(response.data);

      console.log("data", response.data);
    } catch (error) {
      console.error('Error en la búsqueda:', error);
    }
  };

  // Obtener imágenes predeterminadas al cargar la página
  useEffect(() => {
    const getDefaultImages = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/anime/default-images`);
        setAnimeData(response.data);
        console.log("default images", response.data);
      } catch (error) {
        console.error('Error al obtener imágenes predeterminadas:', error);
      }
    };
    getDefaultImages();
  }, []);




  return (
    <HomeContainer className="app-container">
        <SearchContainer className='search'>
            <h1>Buscador de Anime</h1>
            <SearchForm search={search} setSearch={setSearch} getData={getData}/>
        </SearchContainer>
        <MyCarousel>
          {
            animeData.length &&
            animeData.map(anime => <Card key={anime.mal_id} item={anime}/>)
          }
        </MyCarousel>
    </HomeContainer>
  );
}

export default Home;