import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormContextProvider = ({ children }) => {

    const title = {
        0: 'User Info',
        1: 'Shipping Info',
        2: 'Opt-In'
    };

    const [page, setPage] = useState(0);

    const [data, setData] = useState({
        userFirstName: '',
        userLastName: '',
        userAddress1: '',
        userAddress2: '',
        userCity: '',
        userState: '',
        userZipCode: '',
        sameAs: false,
        shipFirstName: '',
        shipLastName: '',
        shipAddress1: '',
        shipAddress2: '',
        shipCity: '',
        shiptState: '',
        shipZipCode: '',
        optInNews: false,
    });

    useEffect(() => {
        if (data.sameAs) {
            setData(prev => ({
                ...prev,
                shipFirstName: prev.firstName,
                shipLastName: prev.lastName,
                shipAddress1: prev.address1,
                shipAddress2: prev.address2,
                shipCity: prev.city,
                shiptState: prev.state,
                shipZipCode: prev.zipCode
            }));
        } else {
            setData(prev => ({
                ...prev,
                shipFirstName: '',
                shipLastName: '',
                shipAddress1: '',
                shipAddress2: '',
                shipCity: '',
                shiptState: '',
                shipZipCode: '',
            }));
        }
    }, [data.sameAs]);

    const handleChange = e => {
        const type = e.target.type;
        const name = e.target.name;
        const value = type === "checkbox"
          ? e.target.checked
          : e.target.value;

        setData(prev => ({
            ...prev,
            [name]: value
        }))
    };

    const { 
        address2, 
        sameAs,
        shipAddress2,
        optInNews,
        ...requiredInputs 
    } = data;
    
    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) 
    && page === Object.keys(title).length - 1;

    const canNextPage1 = Object.keys(data)
    .filter(key => key.startsWith('user') && key !== 'userAddress2')
    .map(key => data[key])
    .every(Boolean);

    const canNextPage2 = Object.keys(data)
    .filter(key => key.startsWith('ship') && key !== 'shipAddress2')
    .map(key => data[key])
    .every(Boolean);

    const disabledPrev = page === 0;

    const disableNext = (page === Object.keys(title).length - 1)
    || (page === 0 && !canNextPage1)
    || (page === 1 && !canNextPage2);

    return (
        <FormContext.Provider
          value={{
            title,
            page,
            setPage,
            data,
            setData,
            canSubmit,
            handleChange,
            disabledPrev,
            disableNext
          }}
        >
            {children}
        </FormContext.Provider>
    )
};

export default FormContext;