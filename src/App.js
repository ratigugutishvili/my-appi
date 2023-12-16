import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [randomElement, setRandomElement] = useState(null);

  const handleButtonClick = async () => {
    try {
      const response = await axios.get('https://oyster-app-tynt9.ondigitalocean.app/getRandom');
      setRandomElement(response.data.randomElement);
    } catch (error) {
      console.error('Error fetching random element:', error.message);
    }
  };

  return (
    <div className="App">
      <h1>გეროს კლასტერის სეკრეტ სანტა</h1>
      <button onClick={handleButtonClick}>აბა ვნახოთ ვინ ამოგივა</button>
      {randomElement && <p>Random Element: {randomElement}</p>}
    </div>
  );
}

export default App;
