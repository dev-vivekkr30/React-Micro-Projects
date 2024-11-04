import { useEffect, useState } from 'react'
function App() {
  const [image, setImage] = useState('');
  const [activeButton, setActiveButton] = useState('');
  
  useEffect(() => {
    setImage('../public/default.jpg');
  },[]);

  const handleClick = (imgPath, buttonName) => {
    setImage(imgPath);
    setActiveButton(buttonName);
  }

  return (
    <>
      <div className='mainApp' style={{ backgroundImage: `url(${image})`}}>
        {/* <h1>Background Image Changer</h1> */}
      </div>
      <div className='buttonContainer'>
        <button className={`ImgBtn ${activeButton === 'London' ? 'active' : ''}`} onClick={()=> handleClick('../public/london.jpg', 'London')}>London</button>
        <button className={`ImgBtn ${activeButton === 'Paris' ? 'active' : ''}`} onClick={()=> handleClick('../public/paris.jpg', 'Paris')}>Paris</button>
        <button className={`ImgBtn ${activeButton === 'Japan' ? 'active' : ''}`} onClick={()=> handleClick('../public/japan.jpg', 'Japan')}>Japan</button>
        <button className={`ImgBtn ${activeButton === 'New York' ? 'active' : ''}`} onClick={()=> handleClick('../public/newyork.jpg', 'New York')}>New York</button>
        <button className={`ImgBtn ${activeButton === 'India' ? 'active' : ''}`} onClick={()=> handleClick('../public/india.jpg', 'India')}>India</button>
      </div>
    </>
  )
}

export default App
