import { useState } from 'react'
function App() {
  const [color, setColor] = useState('#e7edff')
  const [textColor, setTextColor] = useState('#181818')
  return (
    <>
      <div className='mainApp' style={{ backgroundColor: color }}>
        <h1 style={{ color: textColor }}>Background Changer</h1>
      </div>
      <div className='buttonContainer'>
        <button className='colorBtn' style={{backgroundColor:"#ff4848"}} onClick={() =>{setColor('#ff4848'); setTextColor('white')}}>Red</button>
        <button className='colorBtn' style={{backgroundColor:"#1753ff"}} onClick={() =>{setColor('#1753ff'); setTextColor('white')}}>Blue</button>
        <button className='colorBtn' style={{backgroundColor:"#ffe617", color:"black"}} onClick={() => {setColor('#ffe617'); setTextColor('#181818')}}>Yellow</button>
        <button className='colorBtn' style={{backgroundColor:"#e7edff", color:"black"}} onClick={() => {setColor('#e7edff'); setTextColor('#181818')}}>Default</button>
      </div>
    </>
  )
}

export default App
