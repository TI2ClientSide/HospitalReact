import React from "react";
import RouterComponent from "./Router";
import AuthComponent from "./Auth";

// Este é o core da nossa Aplicação
// Redireciona tudo para o Auth e este para o router para se fazer a gestão, deixando assim a nossa App muito + simples, noice.
export default class App extends React.Component {
  render() {
    return (
      <AuthComponent>
        <RouterComponent />
      </AuthComponent>
    );
  }
}