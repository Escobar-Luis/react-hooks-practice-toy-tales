import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDelete, onLike}) {
  return (
    <div id="toy-collection">{toys.map((toy) => { return (
      <ToyCard onLike={onLike} onDelete={onDelete} toy={toy} key={toy.id}/>
    )})}</div>
    );
}

export default ToyContainer;
