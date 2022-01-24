import React, {useState} from 'react';

export const DiasHoras = ({diasHoras, setDiasHoras}) => {

    // console.log(diasHoras.horarios);
    
    const dias = diasHoras !== undefined ? diasHoras.horarios.map(el => el.dia) : [];
    const [ver, setVer] = useState([])
    const [lunes, setLunes] = useState(dias.includes(1));
    const [martes, setMartes] = useState(dias.includes(2));
    const [miercoles, setMiercoles] = useState(dias.includes(3));
    const [jueves, setJueves] = useState(dias.includes(4));
    const [viernes, setViernes] = useState(dias.includes(5));
    const [sabado, setSabado] = useState(dias.includes(6));
    const [domingo, setDomingo] = useState(dias.includes(7));
    const onChangeDay = (e) => {

        if(e.target.checked)
        {
            setVer([...ver, {dia: Number(e.target.value)}]);
        }
        else
        {
            console.log(diasHoras.horarios)

            const newHorario = diasHoras.horarios.filter(item => Number(item.dia) !== Number(e.target.value));
            setVer(newHorario)

        }
    }
    console.log(ver);
    return (
        <>
            {/* LUNES */}
            <div className='fila'>
                <div className='col-1'>
                    <input type="checkbox" id='lunes' name='dias[]' onChange={ (e) => { setLunes(!lunes); onChangeDay(e) }} checked={lunes} value='1' />
                    <label type='button' htmlFor="lunes" className={lunes ? 'btn-dia-horarios seleccionado': "btn-dia-horarios"} >Lun</label>
                </div>
                <div className='col-9 fd-c'>
                    <div className='fila'>
                        <div className='col-6 ai-c'>
                            Desde
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                        <div className='col-6 ai-c'>
                            Hasta
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                    </div>

                    <div className='fila mt-12'>
                        <div className='col-6 ai-c'>
                            Desde
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                        <div className='col-6 ai-c'>
                            Hasta
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                    </div>
                </div>
            </div>  
            <hr className='mt-18 mb-18'/>
            {/* MARTES */}
            <div className='fila'>
                <div className='col-1'>
                    <input type="checkbox" id='martes' name='dias[]' onChange={ (e) => {setMartes(!martes); onChangeDay(e) }} checked={martes} value='2' />
                    <label type='button' htmlFor="martes" className={martes ? 'btn-dia-horarios seleccionado': "btn-dia-horarios"} >Mar</label>
                </div>
                <div className='col-9 fd-c'>
                    <div className='fila'>
                        <div className='col-6 ai-c'>
                            Desde
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                        <div className='col-6 ai-c'>
                            Hasta
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                    </div>

                    <div className='fila mt-12'>
                        <div className='col-6 ai-c'>
                            Desde
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                        <div className='col-6 ai-c'>
                            Hasta
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                    </div>
                </div>
            </div>  
            <hr className='mt-18 mb-18'/>
            {/* MIERCOLES */}
            <div className='fila'>
                <div className='col-1'>
                    <input type="checkbox" id='miercoles' name='dias[]' onChange={ () => {setMiercoles(!miercoles)}} checked={miercoles} value='3' />
                    <label type='button' htmlFor="miercoles" className={miercoles ? 'btn-dia-horarios seleccionado': "btn-dia-horarios"} >Mié</label>
                </div>
                <div className='col-9 fd-c'>
                    <div className='fila'>
                        <div className='col-6 ai-c'>
                            Desde
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                        <div className='col-6 ai-c'>
                            Hasta
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                    </div>

                    <div className='fila mt-12'>
                        <div className='col-6 ai-c'>
                            Desde
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                        <div className='col-6 ai-c'>
                            Hasta
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                    </div>
                </div>
            </div>  
            <hr className='mt-18 mb-18'/>
            {/* JUEVES */}
            <div className='fila'>
                <div className='col-1'>
                    <input type="checkbox" id='jueves' name='dias[]' onChange={ () => {setJueves(!jueves)}} checked={jueves} value='4' />
                    <label type='button' htmlFor="jueves" className={jueves ? 'btn-dia-horarios seleccionado': "btn-dia-horarios"} >Jue</label>
                </div>
                <div className='col-9 fd-c'>
                    <div className='fila'>
                        <div className='col-6 ai-c'>
                            Desde
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                        <div className='col-6 ai-c'>
                            Hasta
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                    </div>

                    <div className='fila mt-12'>
                        <div className='col-6 ai-c'>
                            Desde
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                        <div className='col-6 ai-c'>
                            Hasta
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                    </div>
                </div>
            </div>  
            <hr className='mt-18 mb-18'/>
            {/* VIERNES */}
            <div className='fila'>
                <div className='col-1'>
                    <input type="checkbox" id='viernes' name='dias[]' onChange={ () => {setViernes(!viernes)}} checked={viernes} value='5' />
                    <label type='button' htmlFor="viernes" className={viernes ? 'btn-dia-horarios seleccionado': "btn-dia-horarios"} >Vie</label>
                </div>
                <div className='col-9 fd-c'>
                    <div className='fila'>
                        <div className='col-6 ai-c'>
                            Desde
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                        <div className='col-6 ai-c'>
                            Hasta
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                    </div>

                    <div className='fila mt-12'>
                        <div className='col-6 ai-c'>
                            Desde
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                        <div className='col-6 ai-c'>
                            Hasta
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                    </div>
                </div>
            </div>  
            <hr className='mt-18 mb-18'/>
            {/* SABADO */}
            <div className='fila'>
                <div className='col-1'>
                    <input type="checkbox" id='sabado' name='dias[]' onChange={ () => {setSabado(!sabado)}} checked={sabado} value='6' />
                    <label type='button' htmlFor="sabado" className={sabado ? 'btn-dia-horarios seleccionado': "btn-dia-horarios"} >Sáb</label>
                </div>
                <div className='col-9 fd-c'>
                    <div className='fila'>
                        <div className='col-6 ai-c'>
                            Desde
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                        <div className='col-6 ai-c'>
                            Hasta
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                    </div>

                    <div className='fila mt-12'>
                        <div className='col-6 ai-c'>
                            Desde
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                        <div className='col-6 ai-c'>
                            Hasta
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                    </div>
                </div>
            </div>  
            <hr className='mt-18 mb-18'/>
            {/* DOMINGO */}
            <div className='fila'>
                <div className='col-1'>
                    <input type="checkbox" id='domingo' name='dias[]' onChange={ () => {setDomingo(!domingo)}} checked={domingo} value='7' />
                    <label type='button' htmlFor="domingo" className={domingo ? 'btn-dia-horarios seleccionado': "btn-dia-horarios"} >Dom</label>
                </div>
                <div className='col-9 fd-c'>
                    <div className='fila'>
                        <div className='col-6 ai-c'>
                            Desde
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                        <div className='col-6 ai-c'>
                            Hasta
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                    </div>

                    <div className='fila mt-12'>
                        <div className='col-6 ai-c'>
                            Desde
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                        <div className='col-6 ai-c'>
                            Hasta
                            <input type="number" className='ihorarios' />
                            <span className='separa-hora-minuto'>:</span>
                            <input type="number" className='ihorarios' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
