const apiKey = 'UE3U5F79L12ZEDXR'; 

async function fetchStockPrice() {
  const symbol = 'GME'; 
  const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const price = data['Global Quote']['05. price'];
    const tickerElement = document.getElementById('stock-ticker');
    tickerElement.innerText = `Stock Price: ${price}`;
  } catch (error) {
    console.error('Failed to fetch stock price:', error);
  }
}

fetchStockPrice();
setInterval(fetchStockPrice, 60000); // Fetch stock price every minute