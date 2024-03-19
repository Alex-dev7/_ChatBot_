import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import About from "./Pages/About";
const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" >
                <Route path="" element={<App/>} />
                <Route path="about" element={<About/>} />

        </Route>
    </>
))

export default router 