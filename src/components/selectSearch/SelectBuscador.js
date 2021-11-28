import React, { Component } from 'react'
// import Select from 'react-select'
import { Async } from 'react-select';

export const SelectBuscador = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/carta/'+match.params.id)
            .then(res => {
                setData(res.data);
            })
    }, [match])

    const getOptions = (input, callback) => {
        setTimeout(() => {
          callback(null, {
            options: [
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' }
            ],
            // CAREFUL! Only set this to true when there are no more options,
            // or more specific queries will not be sent to the server.
            complete: true
          });
        }, 500);
      };
    
    return (
        <Async
            name="form-field-name"
            loadOptions={getOptions}
        />
    )
}
