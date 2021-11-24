import { createContext, useState} from "react";
export const DataCartaContext = createContext({});

export const DataCartaProvider = ({ children }) => {

    const [data, setData] = useState([]);

    return (
        <DataCartaContext.Provider value={{data, setData}} >
            {children}
        </DataCartaContext.Provider>
    );
};