// Sample data: destinations with attributes
const destinations = [
  { name: "Bali", budget: "low", climate: "warm", activity: "relaxation" },
  { name: "Switzerland", budget: "high", climate: "cold", activity: "adventure" },
  { name: "Japan", budget: "medium", climate: "moderate", activity: "cultural" },
  { name: "Thailand", budget: "low", climate: "warm", activity: "adventure" },
  { name: "Norway", budget: "high", climate: "cold", activity: "adventure" },
  { name: "Italy", budget: "medium", climate: "moderate", activity: "cultural" },
];

// Function to plan the trip
function planTrip() {
  // Get user inputs
  const budget = document.getElementById("budget").value;
  const climate = document.getElementById("climate").value;
  const activity = document.getElementById("activity").value;

  // Filter destinations based on user preferences
  const suggestedDestinations = destinations.filter(
    (destination) =>
      destination.budget === budget &&
      destination.climate === climate &&
      destination.activity === activity
  );

  // Display the result
  const resultDiv = document.getElementById("result");
  if (suggestedDestinations.length > 0) {
    resultDiv.innerHTML = `<p>Suggested Destinations:</p><ul>${suggestedDestinations
      .map((dest) => `<li>${dest.name}</li>`)
      .join("")}</ul>`;
  } else {
    resultDiv.innerHTML = "<p>No destinations match your preferences. Try adjusting your inputs!</p>";
  }
}