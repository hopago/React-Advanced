import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

const title = {
    0: 'User Info',
    1: 'Shipping Info',
    2: 'Opt-In'
};

export const FormContextProvider = ({ children }) => {

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
        }));
    };

    let canSubmit;
    if (page === Object.keys(title).length - 1) {
      const { address2, sameAs, shipAddress2, optInNews, ...requiredInputs } =
        data;

      canSubmit = [...Object.values(requiredInputs)].every(Boolean);
    }

    const starter = {
        0: 'user',
        1: 'ship'
    };
    const canNextPage = Object.keys(data)
      .filter((key) => key.startsWith(starter[page]) && key !== `${starter[page]}Address2`)
      .map((key) => data[key])
      .every(Boolean);

    const disabledPrev = page === 0;

    const disabledNext = (page === Object.keys(title).length - 1)
    || (page === 0 && !canNextPage)
    || (page === 1 && !canNextPage);

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
            disabledNext
          }}
        >
            {children}
        </FormContext.Provider>
    )
};

export default FormContext;