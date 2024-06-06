import { useState } from 'react'
import './App.css'
import Model from './Model'

function App() {

  const [showModel, setShowModel] = useState(false);

  const handleShowModel = (showModalData) => {
    setShowModel(showModalData);
  }
  return (
    <>
      {/* Modal as Child component in which function and state value are sending */}
      <Model handleModel={handleShowModel} showModel={showModel} />
    </>
  )
}

export default App
