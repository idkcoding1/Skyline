import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./components/Home";
import RootLayout from "./components/Rootlayout";
import About from "./components/About";
import ContactForm from "./components/Contactus";
import Costestimation from "./Pages/services/Costestimation";
import ConcreteEstimating from "./Pages/trades/ConcreteEstimating";


const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
        <Route index={true} element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
        <Route path="/services/cost-estimation" element={<Costestimation />} />
        <Route path="/services/concrete-estimating" element={<ConcreteEstimating/>} />
        
        
        </Route>

    )
)
export default router






