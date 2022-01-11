import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { DiasHoras } from './DiasHoras';

export const CrearDiasHorarios = () => {

    const horarios =[
                        {
                            'modalidad': 1,
                            'nombre': "Delivery",
                            'horarios':
                                [
                                    { 
                                        'dia': 1, 
                                        'horario': 
                                        [
                                            {'desde': '08:30', 'hasta': '15:00'},
                                            {'desde': '18:30', 'hasta': '23:00'}
                                        ]
                                    },
                                    { 
                                        'dia': 2, 
                                        'horario': 
                                        [
                                            {'desde': '08:30', 'hasta': '15:00'},
                                            {'desde': '18:30', 'hasta': '23:00'}
                                        ]
                                    }
                                ]
                        },
                        {
                            'modalidad': 2,
                            'nombre': "Take Away",
                            'horarios':
                                [
                                    { 
                                        'dia': 1, 
                                        'horario': 
                                        [
                                            {'desde': '08:30', 'hasta': '15:00'},
                                            {'desde': '18:30', 'hasta': '23:00'}
                                        ]
                                    },
                                    { 
                                        'dia': 2, 
                                        'horario': 
                                        [
                                            {'desde': '08:30', 'hasta': '15:00'},
                                            {'desde': '18:30', 'hasta': '23:00'}
                                        ]
                                    }
                                ]
                        }
                    ]
    
    const [diasHorarios, setDiashorarios] = useState(horarios)
    console.log(horarios);
    return (
        <>
            <div className='cont-dias-horarios-del-local'>
                <div className='fila fd-c'>
                    <h1 className='col-12'>Días y horarios</h1>
                    <hr className='mt-18 mb-18'/>
                </div>  
                <Tabs>
                    <TabList className='fila jc-sa mt-13 mb-18'>
                        <Tab>Delivery</Tab>
                        <Tab>Take away</Tab>
                        <Tab>En el local</Tab>
                    </TabList>
                    <TabPanel>
                        <DiasHoras diasHoras={horarios.find( item => item.modalidad === 1)}/>
                    </TabPanel>
                    <TabPanel>
                        {/* <DiasHoras dias={diasHorarios.takeAway.dias}/> */}
                    </TabPanel>
                    <TabPanel>
                        {/* <DiasHoras dias={diasHorarios.enLocal.dias}/> */}
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}
