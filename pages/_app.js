import "../assests/style/globals.css";
import { store } from "../store/index";
import { Provider } from "react-redux";

function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default App;
