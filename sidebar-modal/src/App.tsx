import Modal from './components/Modal'
import SideBar from './components/SideBar'
import Home from './components/Home'
import './App.css'

// set up the function to open the modal from here and pass those functions as props to each component to the function to open the modal.
// this a problem since we will have to do a lot of prop drilling to get the function to open the modal to the component that needs it.
// we can use the context api to solve this problem.

function App() {
  return (
    <>
      <Modal />
      <SideBar />
      <Home />
    </>
  )
}


export default App
