import * as React from "react";
import * as ReactDom from "react-dom";
import ListImages from "./components/ListImages/ListImages";

const App = () => {
  return <ListImages />;
};

ReactDom.render(<App />, document.getElementById("root"));
