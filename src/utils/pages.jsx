import { LandingPage } from "../pages/LandingPage"
import { TodoListPage } from "../pages/TodoListPage"
import { TodoListFetchPage } from "../pages/TodoListFetchPage"
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
    {
        name: "Todo Fetch",
        route: "todo-fetch",
        component: <TodoListFetchPage />
    },
]