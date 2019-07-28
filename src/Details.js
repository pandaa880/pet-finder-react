import React from "react";

function Details(props) {
  return (
    <div>
      <h1>Hi... LOL</h1>
      <pre>
        <code>{JSON.stringify(props, null, 4)}</code>
      </pre>
    </div>
  );
}

export default Details;
