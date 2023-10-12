import Inputs from "./Inputs";
import useFormContext from '../hooks/useFormContext';

const Form = () => {

    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        disabledPrev,
        disabledNext,
    } = useFormContext();

    const handlePrev = () => {
        setPage(prev => prev - 1);
    };

    const handleNext = () => {
        setPage(prev => prev + 1);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(JSON.stringify(data));
    };

    const content = (
        <form onSubmit={handleSubmit}>
            <header>
                <h2>{title[page]}</h2>
                <div className="btn-container">
                  <button disabled={disabledPrev} type="button" onClick={handlePrev}>Prev</button>
                  <button disabled={disabledNext === undefined || disabledNext} type="button" onClick={handleNext}>Next</button>
                  <button type="submit" disabled={!canSubmit}>Submit</button>
                </div>
            </header>
            <Inputs />
        </form>
    )

  return content;
}

export default Form
