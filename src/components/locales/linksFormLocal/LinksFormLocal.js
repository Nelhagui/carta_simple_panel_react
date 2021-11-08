import React from 'react'
import { scroller } from 'react-scroll'
import { animateScroll as scroll} from ‘react-scroll’;

export const LinksFormLocal = () => {
      
    return (
        <div className='fila jc-c'>
            {/* <button></button> */}
            <button onClick={onClickDown}>Abajo</button>
            <div onClick={scroller.scrollTo("seccion-redes")}>
                llevarme a redes sociales
            </div>
        </div>
    )
}
