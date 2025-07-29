import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import ShowPage from "./pages/ShowPage";
import { MediaProvider } from "./context/MediaContext";

function App() {
    return (
        <>
            <MediaProvider>
                <BrowserRouter>
                    <Routes>
                        <Route Component={DefaultLayout}>
                            <Route path="/" Component={ShowPage} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </MediaProvider>
        </>
    );
}

export default App;
