import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {     
    
    const {data:images , loading} = useFetchGif(category);    
    
    return (
        <>
            <h3 className='card animate__animated animate__fadeIn'>{category}</h3>            
    
            {loading && <p className='card animate__animated animate__flash'>Loading</p> }            
           
            <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem 
                             key={ img.id }    
                            {...img }
                        />
                    ))
                }                  
            </div> 
        </>
    )
}