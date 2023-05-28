import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Porichiti from "../../pages/Porichiti/Porichiti";
import Blog from "../../pages/Blog/Blog";
import Questions from "../../pages/Questions/Questions";
import SelfRuqia from "../../pages/SelfRuqia/SelfRuqia";
import Masnun from "../../pages/SelfRuqia/Masnun/Masnun";
import BoroiPata from "../../pages/SelfRuqia/BoroiPata/BoroiPata";
import NajarGosolo from "../../pages/SelfRuqia/NajarGosolo/NajarGosolo";
import TabijJadu from "../../pages/SelfRuqia/TabijJadu/TabijJadu";
import GharHefajot from "../../pages/SelfRuqia/GharHefajot/GharHefajot";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/porichiti",
                element: <Porichiti></Porichiti>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/questions",
                element: <Questions></Questions>
            },
            {
                path: "/selfruqia",
                element: <SelfRuqia></SelfRuqia>
            },
            {
                path: "/masnunamol",
                element: <Masnun></Masnun>
            },
            {
                path: "/boroipata",
                element: <BoroiPata></BoroiPata>
            },
            {
                path: "/tabijojadu",
                element: <TabijJadu></TabijJadu>
            },
            {
                path: "/ghorhefajot",
                element: <GharHefajot></GharHefajot>
            },
            {
                path: "/najorgosol",
                element: <NajarGosolo></NajarGosolo>
            },
            {
                path: "/",
                element: <Masnun></Masnun>
            },
        ]
    }
])