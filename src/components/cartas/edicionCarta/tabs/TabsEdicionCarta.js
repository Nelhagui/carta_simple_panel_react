import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TabCategorias } from './tabCategorias/TabCategorias';
import { TabCombos } from './tabCombos/TabCombos';
import { TabProductos } from './tabProductos/TabProductos';

export const TabsEdicionCarta = () => {
    return (
        <>
            <Tabs>
                <TabList className='fila jc-sa mt-13 mb-18'>
                    <Tab>Categorías</Tab>
                    <Tab>Productos</Tab>
                    <Tab>Combos</Tab>
                </TabList>

                <TabPanel>
                    <TabCategorias/>
                </TabPanel>
                
                <TabPanel>
                    <TabProductos/>
                </TabPanel>

                <TabPanel>
                    <TabCombos/>
                </TabPanel>
            </Tabs>
        </>
    )
}
