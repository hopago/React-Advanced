import Form from "./components/Form"
import { FormContextProvider } from "./context/FormContext"
import ProgressBar from "./components/progressbar/ProgressBar"

function App() {
  return (
    <>
      <FormContextProvider>
        <ProgressBar />
        <Form />
      </FormContextProvider>
    </>
  );
}

export default App
