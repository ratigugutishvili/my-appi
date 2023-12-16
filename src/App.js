import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [randomElement, setRandomElement] = useState(null);
  const [claass,setclass] = useState('')

  const handleButtonClick = async () => {
    try {
      const response = await axios.get('https://oyster-app-tynt9.ondigitalocean.app/getRandom');
      setRandomElement(response.data.randomElement);
    } catch (error) {
      console.error('Error fetching random element:', error.message);
    }
    setclass('display-none')
  };

  return (
    <div className="App">
      <h1>გეროს კლასტერის სეკრეტ სანტა</h1>
      <button onClick={handleButtonClick} className={claass} >აბა ვნახოთ ვინ ამოგივა</button>
      {randomElement && <p>დაა ამოგივიდაა: {randomElement}</p>}
    </div>
  );
}

export default App;
