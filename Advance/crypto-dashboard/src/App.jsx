import Dashboard from "./pages/Dashboard/Dashboard"
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/support",
    element: <Support/>,
  },
  {
    path: "/transaction",
    element: <TransactionPage/>,
  },

]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    
    </>
  )
}

export default App
