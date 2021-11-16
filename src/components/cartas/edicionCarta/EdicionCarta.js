import React from 'react';
import './EdicionCarta.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TabCombos } from './tabs/tabCombos/TabCombos';
import {TabProductos} from './tabs/tabProductos/TabProductos';
import {TabCategorias} from './tabs/tabCategorias/TabCategorias';

export const EdicionCarta = ({data}) => {
    console.log(data)
    return (
        <div>
            <Tabs>
                <TabList className='fila jc-sa mt-13 mb-18'>
                    <Tab>Categorías</Tab>
                    <Tab>Productos</Tab>
                    <Tab>Combos</Tab>
                </TabList>
                <TabPanel>
                    <TabCategorias data={data}/>
                </TabPanel>
                
                <TabPanel>
                    <TabProductos data={data}/>
                </TabPanel>

                <TabPanel>
                    <TabCombos data={data}/>
                </TabPanel>
            </Tabs>
        </div>
    )
}
