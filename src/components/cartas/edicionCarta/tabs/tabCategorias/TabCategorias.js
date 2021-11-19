import React from "react";
import { useState} from "react";
import './TabCategorias.css';
import { Buscador } from '../../../../buscador/Buscador';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { ModalCrearCategoria } from './modalCrearCategoria/ModalCrearCategoria';


export const TabCategorias = ({data}) => {
    const [isOpenAdd, setIsOpenAdd] = useState(false); 
    const itemsCategoria = data.map((item, index) => 
                <AccordionItem key={index} >
                    <AccordionItemHeading className='fila'>
                        <AccordionItemButton className='item-lista-tabs'>
                            <div className='fila'>
                                <div className="col-4">
                                    <img src="" alt="" />
                                    {item.nombre}
                                </div>
                                <div className="col-4">{item.descripcion}</div>
                                <div className="col-4 jc-fe">
                                    <img src="/img/activo.svg" alt="" />
                                    <img src="/img/icon-duplicar.svg" alt="" />
                                    <img src="/img/editar-base.svg" alt="" />
                                    <img src="/img/seleccion.svg" alt="" />
                                </div>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="fila mt-26 mb-6">
                            <div className='col-3 jc-fs'>Productos y combos</div>
                            <div className='col-3 jc-fs'>Código</div>
                            <div className='col-3 jc-fs'>Precios</div>
                            <div className='col-3 jc-c'>Acciones</div>
                        </div>
                        <hr className='mb-26'/>
                        {item.productos.map((producto, index) =>
                            <div className="fila item-contenido-categoria mb-17" key={index}>
                                <div className="col-3 jc-fs">
                                    <img src="" alt="" />
                                    {producto.nombre} {index}
                                </div>
                                <div className="col-3 jc-fs">{producto.codigo}</div>
                                <div className="col-3 jc-fs">{producto.precio_final}</div>
                                <div className="col-3 jc-sa">
                                    <img src="/img/activo.svg" alt="" />
                                    <img src="/img/icon-duplicar.svg" alt="" />
                                    <img src="/img/editar-base.svg" alt="" />
                                    <img src="/img/borrar.svg" alt="" />
                                </div>
                            </div>
                        )}
                        {item.combos.map((combo) =>
                            <div className="fila item-contenido-categoria" key={combo.id+'combo'}>
                                <div className="col-3 jc-fs">
                                    <img src="" alt="" />
                                    {combo.nombre}
                                </div>
                                <div className="col-3 jc-fs">{combo.codigo} (combo)</div>
                                <div className="col-3 jc-fs">{combo.precio_final}</div>
                                <div className="col-3 jc-sa">
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
            <ModalCrearCategoria open={isOpenAdd} close={()=>setIsOpenAdd(false)} />
            <div className="fila jc-fe">
                <button className='btn-secundario btn-disabled'>ELIMINAR</button>
                <button className='btn-primario' onClick={() => setIsOpenAdd(true)} >CREAR CATEGORIA</button>
            </div> 
            <Buscador/>
            <div className="fila">
                <div className='col-4'> Categoría </div>
                <div className='col-4'> Descripción </div>
                <div className='col-4 jc-fe'> Acciones </div>
            </div>
            <Accordion>
                {itemsCategoria}
            </Accordion>
            
        </>
    )
}

