import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Navbar } from './Navbar'
import { List } from './List'
import { Modal } from './Modal'

const App = () => {
  const [selected, setSelected] = useState()

  return (
    <>
      <Navbar />
      <List setSelected={setSelected} />
      {createPortal(
        <Modal selected={selected} setSelected={setSelected} />,
        document.body
      )}
    </>
  )
}

export { App }
