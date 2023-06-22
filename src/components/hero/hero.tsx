import { IMovie } from "@/interfaces/app.interface"
import { HeroProps } from "./hero.props"
import { useState, useEffect } from "react"
import Image from "next/image"
import { image_base_url } from "@/helpers/constants";
import { CiPlay1 } from "react-icons/ci"

const Hero = ({ trending }: HeroProps): JSX.Element => {
  const [movie, setMovie] = useState<IMovie>({} as IMovie)
  useEffect(() => {
    const randomMovie = trending[Math.floor(Math.random() * trending.length)]
    setMovie(randomMovie)
  }, [trending])
  console.log(movie);

  return (
    <div className="flex flex-col space-y-2 pt-24 md:space-y-4  lg:h-[65vh] lg:justify-end ">
      <div className="object-cover h-[95vh] w-full absolute top-0 left-0 -z-10 ">
        <Image src={`${image_base_url}${movie?.backdrop_path || movie?.poster_path}`} alt={movie.title} fill />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-shadow-md">{movie?.title || movie?.name || movie?.original}</h1>
      <p className="max-w-xs md:max-w-lg lg:max-w-2xl text-xs md:text-sm lg:text-xl text-shadow-lg">{movie?.overview}</p>
      <div>
        <button className="flex items-center justify-center gap-2 bg-white/40 text-black font-bold py-2 px-10 rounded-full text-shadow"><CiPlay1 /> Watch Now </button>
      </div>
    </div>
  )
}

export default Hero