import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import About from "./Pages/About";
import AirQuality from "./Pages/AirQSearch/AirQuality";
const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" >
                <Route path="" element={<App/>} />
                <Route path="about" element={<About/>} />
                <Route path="aquality" element={<AirQuality/>} />

        </Route>
    </>
))

export default router 