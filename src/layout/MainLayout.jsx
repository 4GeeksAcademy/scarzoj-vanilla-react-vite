import { useState } from "react"
import { LandingPage } from "../pages/LandingPage"
import { CounterPage } from "../pages/CounterPage"
import { NavBar } from "../components/Navbar"

export const MainLayout = () => {
    const [activePage, setActivePage] = useState("landing")

    const pages = {
        landing: <LandingPage />,
        counter: <CounterPage />
    }

    return (
        <>
            <NavBar activePage={activePage} setActivePage={setActivePage} />
            {pages[activePage]}
        </>
    )
}