import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });
  const [dataAvailable, setDataAvailable] = useState(true);

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTFlY2FiMWI5NGEzNDUxYmFhOWQ1YTJkYjFiNDBiMyIsIm5iZiI6MTc3NjY5ODYzNy4wMjksInN1YiI6IjY5ZTY0NTBkYzQ0NTU0MjI4M2M3MGQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Rw6Kzz2pzLMN2SKldlBizvlbuurJT80YA_Wxmr5RIU'
  }, 
};

useEffect(() => {

  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
          setDataAvailable(true); // Set to true if data is found
        } else {
          setDataAvailable(false); // No data found
          toast.error('No video available for this movie.');
        }
      })
      .catch(err => {
        // toast.error('Error when fetching');
        setDataAvailable(false); // Handle fetch error
      });

}, [])

// useEffect(() => {
//   const fetchData = async () => {
// try {
//       const response = await fetchData(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
//       const data = await response.json();
//       setApiData(data.results[0]);
// } catch (error) {
//     toast.error("No trailer available")
// }
//   }
//   fetchData();
// })


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() => {navigate(-1)}} />
      <iframe width="90%s" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameBorder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
