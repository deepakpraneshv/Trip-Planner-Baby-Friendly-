// To save a trip
fetch('http://localhost:5000/trips', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newTrip),
})
  .then(response => response.json())
  .then(data => {
    console.log('Trip saved:', data);
    // Optionally, call fetchTrips() or update the UI after saving
    fetchTrips(); // If you want to refresh the trip list
  })
  .catch(error => console.error('Error saving trip:', error));

// To get trips
fetch('http://localhost:5000/trips')
  .then(res => res.json())
  .then(data => {
    setTrips(data); // Assuming setTrips is a state update function in React
  })
  .catch(error => console.error('Error fetching trips:', error));
