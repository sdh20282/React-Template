import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "redux/store/store.js";

import Router from "router/Router";

import { GlobalStyle } from "styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
