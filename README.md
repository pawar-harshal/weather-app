# Weather App

Welcome to the Weather App! This application provides current weather details by fetching data from the OpenWeather API.

## Features

- Displays current weather conditions including temperature, humidity,Wind speed and weather description.
- Fetches weather data based on the user's input City name.
- Built using React for the frontend and the OpenWeather API for weather data.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

   also install icons by using - npm i react-icons command.

### Setup OpenWeather API Key

To fetch weather data, you need to sign up for an API key from OpenWeather:

1. Go to [OpenWeather](https://openweathermap.org/api) and sign up for a free account.
2. Once you have an account, generate an API key from your dashboard.

### Configure API Key

1. Open the `Weather.jsx` file in the `src` directory.
2. Find the section where the API key is used and replace `'YOUR_API_KEY_HERE'` with your actual OpenWeather API key:

   ```jsx
   const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your OpenWeather API key
   ```

3. Save the changes.

### Running the App

To start the application, use the following command:

```bash
npm run dev
```

This will start the development server and open the app in your default web browser.

Usage
1.Enter a city name into the input field.
2.Click the search icon to get the weather details.
3.The current weather conditions for the specified city will be displayed.

##Contributing:

If you would like to contribute to this project, feel free to open issues or submit pull requests. Please follow the existing code style and write clear commit messages.

##Contact
For any questions or feedback, you can reach out to harshalpawar242424@gmail.com.

#Happy coding!
