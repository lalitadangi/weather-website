document.addEventListener('DOMContentLoaded', () => {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    // Get weather information based on city name
    const getWeatherData = async (city) => {
        try {
            const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            displayWeatherInfo(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    // Display weather information in the UI
    const displayWeatherInfo = (data) => {
        const weatherInfoElement = document.getElementById('weather-info');
        weatherInfoElement.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    };

    // Prompt the user for the city name and fetch weather data
    const city = prompt('Enter city name:');
    if (city) {
        getWeatherData(city);
    }
});
