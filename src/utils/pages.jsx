import { LandingPage } from "../pages/LandingPage"
import { TodoListPage } from "../pages/TodoListPage"
import { CounterPage } from "../pages/CounterPage"

export const pages = [
    {
        name: "Landing",
        route: "landing",
        component: <LandingPage />
    },
    {
        name: "Counter",
        route: "counter",
        component: <CounterPage />
    },
    {
        name: "Todo",
        route: "todo",
        component: <TodoListPage />
    },
]