import React from "react";

export const Rating = () => {
  let list = [];
  for (let i = 0; i < 5; i++) {
    list.push(<span key={i} className="fa fa-star checked"></span>);
  }
  return list;
};
