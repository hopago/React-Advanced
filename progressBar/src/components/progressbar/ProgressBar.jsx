import useFormContext from "../../hooks/useFormContext";
import './progressBar.css';

const ProgressBar = () => {

    const { page, title } = useFormContext();

    const interval = 100 / Object.keys(title).length;

    const progress = ((page + 1) * interval).toFixed(0);

    const steps = Object.keys(title).map((step, i) => (
      <div 
        style={{ width: "100%", textAlign: "center" }} 
        key={step} 
        className="marker"
      >
        Step: {i + 1}
      </div>
    ));

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="progressContainer"
        style={{
          width: "100%",
          padding: "20px",
        }}
      >
        <div
          className="progressWrapper"
          style={{
            display: "flex",
            width: "100%",
            height: "100px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}
        >
          <div
            className="barMarker-container"
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            {steps}
          </div>
          <progress
            className="progress"
            max="100"
            value={progress}
            style={{ width: "50%" }}
          ></progress>
        </div>
      </div>
    </section>
  );
}

export default ProgressBar
