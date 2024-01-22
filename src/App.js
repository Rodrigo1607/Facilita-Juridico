import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import ClienteManager from "./components/ClienteManager";


const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Resume />
            <ClienteManager />
        </>
    );
};

export default App;
