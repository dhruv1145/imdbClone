import React from 'react'
import { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import './Card.scss'
import { Link } from 'react-router-dom'
import { CiStar } from "react-icons/ci";


const Card = ({ movie }) => {
    const [isloading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);

    }, [])

    return (
        isloading ?
            <div className="cards">
                <SkeletonTheme baseColor="#202020" highlightColor='#444'>
                    <Skeleton height={300} duration={2} />
                </SkeletonTheme>
            </div>
            :
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                <div className="cards">
                    <img src={`http://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} className="cards__img" />
                    <div className="cards__overlay">
                        <div className="cards__title">
                            {movie ? movie.original_title : ""}
                        </div>
                        <div className="cards__runtime">
                            {movie ? movie.release_date : ""}
                            <span className='cards__rating'>
                                {movie ? movie.vote_average : ""}
                                <CiStar />{" "}
                            </span>

                        </div>

                        <div className="cards__description">
                            {movie ? movie.overview.slice(0, 118) + "..." : ""}
                        </div>
                    </div>
                </div>
            </Link>
    )
}

export default Card