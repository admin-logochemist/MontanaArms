import { RouterProvider } from 'react-router-dom'
import {publicRoutes} from './routes/routes'

function App() {
  const data =  [
    {
    "UPCcode": "723364213373",
    "PartNum": "WA5120364",
    "WishQTY": 2
    },
    {
    "UPCcode": "736676020089",
    "PartNum": "RUG02008",
    "WishQTY": 1
    }
    ]
    console.log(JSON.stringify(data))
  return (
    <>
      <RouterProvider router={publicRoutes} />
    </>
  )
}

export default App
