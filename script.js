// script.js

function fomo() {
  const messages = [
    "You missed out! (Or did you?)",
    "Minting... Just kidding, nothing happened.",
    "You feel the urge to buy carrots.",
    "Congratulations! You minted 0 coins.",
    "You just joined the Roman Empire of Memes.",
    "FOMO level: MAXIMUM",
    "Ave Carota! Ave Canina!"
  ];
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById('fomo-message').textContent = msg;
}
async function fetchSolPrice() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
    const data = await response.json();
    const price = data.solana.usd;
    document.getElementById('sol-price').textContent = `$${price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  } catch (e) {
    document.getElementById('sol-price').textContent = 'N/A';
  }
}

// Fetch price on load and update every 60 seconds
fetchSolPrice();
setInterval(fetchSolPrice, 60000);
