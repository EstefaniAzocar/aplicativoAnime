
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm/index.jsx';
import { MyCarousel } from '../components/Carousel/index.jsx';
import { HomeContainer, SearchContainer, LoadingMessage, NoAnimesMessage } from '/src/routes/Home.js';
import { Card } from '/src/components/Card/index.jsx';

function Home() {
  const [search, setSearch] = useState('');
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noAnimes, setNoAnimes] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;
  
  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/api/anime?q=${search}`);
      if (response.data.length === 0) {
        setNoAnimes(true);
      } else {
        setAnimeData(response.data);
        setNoAnimes(false);
      }
    } catch (error) {
      console.error('Error en la búsqueda:', error);
    } finally {
      setLoading(false);
      setSearch(''); 
    }
  };

  useEffect(() => {
    const getDefaultImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${apiUrl}/api/anime/default-images`);
        setAnimeData(response.data);
      } catch (error) {
        console.error('Error al obtener imágenes predeterminadas:', error);
      } finally {
        setLoading(false);        
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

      {loading ? (
        <LoadingMessage>Cargando imágenes...</LoadingMessage>
      ) : (
        <>
          {noAnimes ? (
            <NoAnimesMessage>No hay animes.</NoAnimesMessage> // Utilizar el componente de estilo para el mensaje
          ) : (
            <MyCarousel>
              {animeData.length &&
                animeData.map(anime => <Card key={anime.mal_id} item={anime}/>)
              }
            </MyCarousel>
          )}
        </>
      )}
    </HomeContainer>
  );
}

export default Home;