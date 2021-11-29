import React from 'react';
import axios from 'axios';
import AsyncSelect from 'react-select/async'

export const SelectBuscador = ({resultado, setResultado}) => {
	const loadOptions = async (inputText, callback ) => {
		const response = await axios.post('http://127.0.0.1:8000/api/categoria/busqueda/'+inputText)
						.then(res => {
							return res.data;
						})
		callback(response.map(i=>({label: i.nombre, value: i.id})))
	}
	const customStyles = {
		control: () => ({
			border: '1px solid #C4C4C4',
			borderRadius: '16px',
			display: 'flex',
			minHeight: '45px',
			paddingLeft: '22px',
		}),
		
		multiValue: (base) => ({
			...base,
			minHeight: '36px',
			padding: '7px 21px 10px 17px',
			background: 'rgba(196, 196, 196, 0.4)',
			border: 'none',
			borderRadius: '10px',
		}),
		multiValueLabel: (base) => ({
			...base,
			fontWeight: 'bold',
			color: '#EB6F65',
			fontSize: '1rem',
		  }),
	  }
	const onChange = (e) => {
		console.log(e)
		setResultado(e)
	}
	return (
		<div className='mt-13'>
			<AsyncSelect
				isMulti
				value={resultado}
				onChange={onChange}
				styles={customStyles}
				loadOptions={loadOptions}
				placeholder='Escribe el nombre de la categoría'
			/>
		</div>
	)
}
