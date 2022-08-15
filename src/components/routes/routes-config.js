import Cats from "../Cats"
import Favourite from "../Favourite"

export const routes = [
    {
        path: '/',
        element: Cats,
    },
    {
        path: '/favourite',
        element: Favourite,
    },
]