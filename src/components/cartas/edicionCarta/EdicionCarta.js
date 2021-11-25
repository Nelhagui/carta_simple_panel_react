import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './EdicionCarta.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TabCombos } from './tabs/tabCombos/TabCombos';
import {TabProductos} from './tabs/tabProductos/TabProductos';
import {TabCategorias} from './tabs/tabCategorias/TabCategorias';

export const EdicionCarta = ({match}) => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/carta/'+match.params.id)
            .then(res => {
                setData(res.data);
            })
    }, [match])
    
    return (
        <div>
            <Tabs>
                <TabList className='fila jc-sa mt-13 mb-18'>
                    <Tab>Categorías</Tab>
                    <Tab>Productos</Tab>
                    <Tab>Combos</Tab>
                </TabList>
                <TabPanel>
                    <TabCategorias data={data} setData={setData}/>
                </TabPanel>
                
                <TabPanel>
                    <TabProductos data={data} setData={setData}/>
                </TabPanel>

                <TabPanel>
                    <TabCombos data={data} setData={setData}/>
                </TabPanel>
            </Tabs>
        </div>
    )
}
