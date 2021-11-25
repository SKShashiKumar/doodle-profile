const ProgressBars = (props) => {
  return (
    <>
      <div className="row mt-2">
        <div className="col">
          <p>{props.Heading}</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <div class="progress" style={{ height: props.Height }}>
            <div
              class="progress-bar"
              role="progressbar"
              style={{
                width: `${props.Progress}%`,
                backgroundColor: "#009688",
                borderRadius: "15px",
              }}
              aria-valuenow= {props.Progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {props.Progress}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBars;
