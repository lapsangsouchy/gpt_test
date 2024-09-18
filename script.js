document.addEventListener('DOMContentLoaded', () => {
  const failButton = document.getElementById('failButton');
  const failMessage = document.getElementById('failMessage');
  const confetti = document.getElementById('confetti');
  const quoteButton = document.getElementById('quoteButton');
  const quoteDisplay = document.getElementById('quote');

  // Array of famous failure quotes
  const quotes = [
    "“I have not failed. I've just found 10,000 ways that won't work.” – Thomas A. Edison",
    '“Failure is success in progress.” – Albert Einstein',
    '“Only those who dare to fail greatly can ever achieve greatly.” – Robert F. Kennedy',
    '“Failure is the condiment that gives success its flavor.” – Truman Capote',
    '“Success is not final, failure is not fatal: It is the courage to continue that counts.” – Winston S. Churchill',
  ];

  // Interactive failure button
  failButton.addEventListener('click', () => {
    failMessage.innerText = 'Oops! Another failure, keep going!';
    failMessage.style.color = 'red';
    confetti.classList.remove('hidden');
    setTimeout(() => {
      confetti.classList.add('hidden');
      failMessage.innerText = 'Every failure brings you closer to success!';
      failMessage.style.color = '#ff8567';
    }, 2000);
  });

  // Generate random quote on button click
  quoteButton.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.innerText = randomQuote;
  });
});
