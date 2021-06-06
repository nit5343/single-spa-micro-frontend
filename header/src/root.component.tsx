import React from "react";

export default function Root(props) {
  return <header style={{ height: 40, fontSize: 30, width: "100%", background: "#f1f1f1"}}>{props.name}</header>;
}
