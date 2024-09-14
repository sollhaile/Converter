(function() {
  document.getElementById('converter').addEventListener('submit', function(event) {
    event.preventDefault();
    const distance = parseFloat(document.getElementById('distance').value);
    var answer = document.getElementById('answer'); // Initialize 'answer' here

    if (distance) {
      var conversion = distance * 1.609344;
      conversion = Math.round(conversion * 100) / 100; // Correct rounding
      answer.innerHTML = `<h2>${distance} miles is ${conversion} kilometers</h2>`;
    } else {
      answer.innerHTML = '<h2>Please provide a number!</h2>';
    }
  });
})();
