import React from "react";
import ReactDOM from "react-dom/client";
import { Projects } from "/components/Projects";

(function () {
  const root = document.getElementById(".react-mount.projects")!;
  ReactDOM.createRoot(root).render(<Projects />);
})();