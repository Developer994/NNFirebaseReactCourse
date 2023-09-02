import { useState } from 'react';
import './App.css';
import Triplist from './components/TripList';

function App() {
  const [showTrips, setShowTrips] = useState(true);

  return (
    <div className='App'>
      <button onClick={() => setShowTrips(false)}>hide trips</button>
      {showTrips && <Triplist />}
    </div>
  );
}

export default App;
