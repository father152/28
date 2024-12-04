import React from "react";
import "./golovna.css";
import LoremIpsum from "react-lorem-ipsum";

export default function Golovna() {
  return (
    <>
      <h1>WELCOME</h1>
      <div className="golovna">
        <div className="container-1">
          <h2>Container 1</h2>
          <div className="left-part">
            <h3>Left Part</h3>
            <p><LoremIpsum /></p>
            <img src="https://picsum.photos/id/59/600/300" alt=""></img>
            <h3>Description</h3>
            <LoremIpsum />
          </div>
        </div>

        <div className="container-2">
          <h2>Container 2</h2>
          <div className="central-part">
            <h3>Central Part</h3>
            <img src="https://picsum.photos/id/57/600/300" alt=""></img>
            <LoremIpsum />
            <h3>Description</h3>
            <LoremIpsum />
            <LoremIpsum />  
          </div>
        </div>

        <div className="container-3">
          <h2>Container 3</h2>
          <div className="right-part">
            <h3>Right Part</h3>
            <LoremIpsum />
            <img src="https://picsum.photos/id/58/600/300" alt=""></img>
            <h3>Description</h3>
            <LoremIpsum />
          </div>
        </div>
      </div>
    </>
  );
}
