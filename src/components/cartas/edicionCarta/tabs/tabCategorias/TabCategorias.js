import React from 'react';
import './TabCategorias.css';
import { Buscador } from '../../../../buscador/Buscador';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


export const TabCategorias = ({data}) => {
    const itemsCategoria = data.map((item, index) => 
            
                <AccordionItem key={index}>
                    <AccordionItemHeading className='fila'>
                        <AccordionItemButton>
                            <div className='fila'>
                                <div className="col-3">
                                    <img src="" alt="" />
                                    {item.nombre}
                                </div>
                                <div className="col-3">{item.descripcion}</div>
                                <div className="col-3">acciones</div>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {item.productos.map((producto, index) =>
                            <div className="fila item-contenido-categoria" key={index}>
                                <div className="col-3">
                                    <img src="" alt="" />
                                    {producto.nombre}
                                </div>
                                <div className="col-3">{producto.codigo}</div>
                                <div className="col-3">{producto.precio_final}</div>
                                <div className="col-3">
                                    <img src="/img/activo.svg" alt="" />
                                    <img src="/img/icon-duplicar.svg" alt="" />
                                    <img src="/img/editar-base.svg" alt="" />
                                    <img src="/img/borrar.svg" alt="" />
                                </div>
                            </div>
                        )}
                        {item.combos.map((combo) =>
                            <div className="fila item-contenido-categoria" key={combo.id+'combo'}>
                                <div className="col-3">
                                    <img src="" alt="" />
                                    {combo.nombre}
                                </div>
                                <div className="col-3">{combo.codigo} (combo)</div>
                                <div className="col-3">{combo.precio_final}</div>
                                <div className="col-3">
                                    <img src="/img/activo.svg" alt="" />
                                    <img src="/img/icon-duplicar.svg" alt="" />
                                    <img src="/img/editar-base.svg" alt="" />
                                    <img src="/img/borrar.svg" alt="" />
                                </div>
                            </div>
                        )}
                    </AccordionItemPanel>
                </AccordionItem>
    )
    return (
        <>
            <Buscador/>
            <Accordion>
                {itemsCategoria}
            </Accordion>
            
        </>
    )
}
