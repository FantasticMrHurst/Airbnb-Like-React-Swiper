import React from "react";
import ReactDOM from "react-dom";
import Swiper from "better-react-swiper";

import "./styles.css";

function Card(props) {
  return (
    <div
      style={{
        margin: "0 10px 20px",
        width: "100%",
        boxShadow: "0 0 6px rgba(0, 0, 0, 0.15)",
        overflow: "hidden",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        color: "#105783"
      }}
    >
      <img
        src={`https://picsum.photos/300/200?image=${props.id}`}
        alt={props.content}
        style={{ width: "100%", userSelect: "none", pointerEvents: "none" }}
      />
      <div style={{ alignSelf: "flex-start", padding: "17px" }}>
        {props.content}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="wrapper" style={{ margin: "60px 0" }}>
        <Swiper
          items={[
            <Card id={1084} content="Unique Stays" />,
            <Card id={1081} content="Lorem ipsum" />,
            <Card id={1070} content="Lorem ipsum" />,
          ]}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
