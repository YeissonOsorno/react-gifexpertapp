import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const [images, setImages] = useState([])
    //Similar al ComponentDidMount, cuando paso el [] vacio le digo que solo lo ejecute 1 vez
    useEffect(()=>{
        getGifs(category)
        .then(setImages)
    },[category]);

    //Uso el Helper de la peticion
    
    return (
        <div className="card-grid">
            <h3>{category}</h3>
            {
                images.map((img)=>(
                    <GifGridItem  key={img.id} {...img}/>
                ))
            }
        </div>
    )
}
