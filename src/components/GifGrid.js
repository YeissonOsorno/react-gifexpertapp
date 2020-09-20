import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {
    
    //Llamo a mi Custom Hook
    
   
    const {data:images,loading} = useFetchGifs(category);

    
    return (
        <div className="card-grid">
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            <br/>
            {loading && <p className="animate__animated animate__flash">Loading</p> }
            {
                images.map((img)=>(
                    <GifGridItem  key={img.id} {...img}/>
                ))
            }
           
        </div>
    )
}
