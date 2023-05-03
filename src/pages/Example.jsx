import React from "react";
import ReactToPdf from "react-to-pdf";

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a PDF generated from a React component.</p>
    </div>
  );
};
const Example = () => {
  const ref = React.createRef();

  const options = {
    filename: "my-component.pdf",
    orientation: "portrait",
    unit: "in",
    format: [4, 6],
  };

  return (
    <div>
      <ReactToPdf targetRef={ref} filename={options.filename} options={options}>
        {({ toPdf }) => <button className="btn" onClick={toPdf}>Generate PDF</button>}
      </ReactToPdf>
      <div ref={ref}>
        <MyComponent />
      </div>
    </div>
  );
};

export default Example;
