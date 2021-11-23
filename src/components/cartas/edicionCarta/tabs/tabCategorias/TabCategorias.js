import React from "react";
import { useState} from "react";
import './TabCategorias.css';
import { Buscador } from '../../../../buscador/Buscador';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { Modal } from "../../../../modal/Modal";
import { FormCrearCategoria } from "../../../../categorias/crearCategoria/FormCrearCategoria";
import { FormEditarCategoria } from "../../../../categorias/editarCategoria/FormEditarCategoria";
import { FormEditarProducto } from "../../../../producto/editarProducto/formEditarProducto/FormEditarProducto";
import { FormEditarCombo } from "../../../../combos/editarCombo/formEditarCombo/FormEditarCombo";


export const TabCategorias = ({data}) => {
    const [open, setOpen] = useState(false); 
    const close = ()=>{setOpen(false)};
    const [content, setContent] = useState(false)
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
                                    <img className='icon-acciones' src="/img/activo.svg" alt="" />
                                    <img className='icon-acciones' src="/img/icon-duplicar.svg" alt="" />
                                    <img className='icon-acciones' src="/img/editar-base.svg" alt="" onClick={(e)=>{e.preventDefault(); setContent(<FormEditarCategoria id={item.id} close={close}/>); setOpen(true)}} />
                                    <img className='icon-acciones' src="/img/seleccion.svg" alt="" />
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
                                    <img className='icon-acciones' src="/img/activo.svg" alt="" />
                                    <img className='icon-acciones' src="/img/icon-duplicar.svg" alt="" />
                                    <img className='icon-acciones' src="/img/editar-base.svg" alt="" onClick={(e)=>{ setContent(<FormEditarProducto id={producto.id} close={close}/>); setOpen(true)}} />
                                    <img className='icon-acciones' src="/img/borrar.svg" alt="" />
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
                                    <img className='icon-acciones' src="/img/activo.svg" alt="" />
                                    <img className='icon-acciones' src="/img/icon-duplicar.svg" alt="" />
                                    <img className='icon-acciones' src="/img/editar-base.svg" alt="" onClick={()=>{setContent(<FormEditarCombo id={combo.id} close={close}/>); setOpen(true)}}  />
                                    <img className='icon-acciones' src="/img/borrar.svg" alt="" />
                                </div>
                            </div>
                        )}
                    </AccordionItemPanel>
                </AccordionItem>
    )
    return (
        <>
            <Modal children={content} open={open} close={close}/>
            <div className="fila jc-fe">
                <button className='btn-secundario btn-disabled'>ELIMINAR</button>
                <button className='btn-primario' onClick={() => {setContent(<FormCrearCategoria close={close}/>); setOpen(true)}} >CREAR CATEGORIA</button>
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

