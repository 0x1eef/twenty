import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { Task as Component } from "/components/Task";

(function () {
  const params = Object.fromEntries(
    location.hash
      .substring(1, location.hash.length)
      .split(",")
      .map(e => e.split("=")),
  );
  const client = new ApolloClient({
    uri: "/servlet/graphql",
    cache: new InMemoryCache(),
  });
  const root = document.querySelector(".react-root")!;
  ReactDOM.createRoot(root).render(
    <ApolloProvider client={client}>
      <Component taskId={Number(params.id)} />
    </ApolloProvider>,
  );
})();
