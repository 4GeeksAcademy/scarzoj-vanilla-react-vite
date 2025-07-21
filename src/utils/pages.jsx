import { LandingPage } from "../pages/LandingPage"
import { TodoListPage } from "../pages/TodoListPage"
import { TodoListFetchPage } from "../pages/TodoListFetchPage"
import { CounterPage } from "../pages/CounterPage"
import { UserPage } from "../pages/UserPage"

export const pages = [
    {
        name: "Landing",
        route: "",
        component: <LandingPage />,
        showNavigation: true
    },
    {
        name: "Counter",
        route: "counter",
        component: <CounterPage />,
        showNavigation: true
    },
    {
        name: "Todo",
        route: "todo",
        component: <TodoListPage />,
        showNavigation: true
    },
    {
        name: "Todo Fetch",
        route: "todo-fetch",
        component: <TodoListFetchPage />,
        showNavigation: true
    },
    {
        name: "User",
        route: "user/:userSlug",
        component: <UserPage />,
        showNavigation: false
    },
]