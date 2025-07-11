import { useState } from "react"
import { NavBar } from "../components/Navbar"
import { pages } from "../utils/pages"

export const MainLayout = () => {
    const [activePage, setActivePage] = useState("landing")

    return (
        <>
            <NavBar activePage={activePage} setActivePage={setActivePage} />
            {pages.find((page) => activePage === page.route).component}
        </>
    )
}