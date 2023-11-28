import React from 'react'
import "./home.scss"
import axios from "axios"
import { useEffect,useState } from 'react'
import Banner from "./newban.png"

const apiKey = "8c9ce8b859c425401abd7c6beb80ae4f"
const url = "https://api.themoviedb.org/3/movie"
const imgUrl = "https://image.tmdb.org/t/p/original"
const upComing = "upcoming"
const  nowPlaying = "now_playing"
const  popular = "popular"
const  topRated = "top_rated"



const Card = ({img}) => (

  <img src={img} alt='cover' className='card'/>

)

const Row = ({title, arr=[]}) => (
  <div className='row'>
    <h2>{title}</h2>
    <div>
      {
        arr.map((item,index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))
      }
    </div>
  </div>
)


const Home = () => {

  const [upcomingMovies,setUpcomingMovies] = useState([])
  const [nowPlayingMovies,setnowPlayingMovies] = useState([])
  const [popularMovies,setpopularMovies] = useState([])
  const [topRatedMovies,settopRatedMovies] = useState([])

  useEffect(()=>{

      const fetchUpcoming = async()=>{
        const {data} = await axios.get(`${url}/${upComing}?api_key=${apiKey}`) 
        setUpcomingMovies(data)
    };
    
    const fetchnowPlaying = async()=>{
      const {data: {result}} = await axios.get(`${url}/${nowPlaying}?api_key=${apiKey}`) 
      setnowPlayingMovies(result)
    };

    const fetchpopular = async()=>{
      const {data: {results}} = await axios.get(`${url}/${popular}?api_key=${apiKey}`) 
      setpopularMovies(results)
    };

    const fetchtopRated = async()=>{
      const {data: {results}} = await axios.get(`${url}/${topRated}?api_key=${apiKey}`) 
      settopRatedMovies(results)
    };

    fetchUpcoming();
    fetchnowPlaying();
    fetchpopular();
    fetchtopRated();
  },[])

  return (
    <section className='home'>

        <div className='banner'>
          <img src={Banner} alt="Banner" />
        </div>
        <div className='contentBox'>
          <div className='content'>
            <h1>Resident Evil: Death Island</h1>
            <h3>Eight year old Peter is plagued by a mysterious, constant tapping from inside his bedroom wall one that his parents insist is all in his imagination. As Peter's fear intensifies, he believes that his parents could be hiding a terrible, dangerous secret and questions their trust.</h3>
          </div>
          <div className='btns'>
            <button className='playBtn'>Play</button>
            <button className='listBtn'>Mylist</button>
          </div>
        </div>

        <Row title={"Upcoming"} arr={upcomingMovies}/>
        <Row title={"Now Playing"} arr={nowPlayingMovies}/>
        <Row title={"Popular"} arr={popularMovies}/>
        <Row title={"Top Rated"} arr={topRatedMovies}/>
        
    </section>
  )
}

export default Home