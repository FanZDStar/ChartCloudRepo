<!--
 * @Author: ourEDA MaMing
 * @Date: 2024-11-26 19:15:35
 * @LastEditors: ourEDA MaMing
 * @LastEditTime: 2024-11-28 19:31:43
 * @FilePath: \ChartCloudRepo\README.md
 * @Description: 李猴啊
 * 
 * Copyright (c) 2024 by FanZDStar , All Rights Reserved. 
-->

# Douban Top 250 Movies Data Visualization

This project provides an interactive data visualization tool to explore insights from the **Douban Top 250 Movies** list. Built with **Python**, **Flask**, **Echarts**, and **WordCloud**, the tool allows users to view movie data, generate word clouds, and analyze movie statistics in an engaging way.

## Features

- **Interactive Charts**: Utilize **Echarts** to display key statistics about the top 250 movies, such as genres, ratings, and trends.
- **Word Cloud Generator**: Generates a word cloud from movie titles and descriptions using the **WordCloud** library, helping visualize the most frequent terms in the dataset.
- **User Feedback**: Collect and display user feedback in real time.
- **Flask Web Framework**: Provides the backend functionality to render dynamic data visualizations and serve the web interface.

## Technologies

- **Python**: Main programming language for backend data processing and web server functionality.
- **Flask**: Web framework to handle routing, templates, and rendering dynamic content.
- **Echarts**: JavaScript library for creating interactive charts for data visualization.
- **WordCloud**: Python library for generating word clouds from textual data.
- **SQLite**: Lightweight database used to store user feedback and other dynamic content.

## Setup Instructions

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-repository-name.git
cd your-repository-name
```

### 2. Install dependencies:

```bash
pip install -r requirements.txt
```

### 3. Run the Flask application:

```bash
python app.py
```

### 4. Open your browser and navigate to `http://localhost:5000` to start using the application.

## Usage

- **Homepage**: View interactive charts showcasing movie data, such as average ratings, movie genres, and release years.
- **Word Cloud**: Use the word cloud tool to visualize the most common words in movie titles and descriptions.
- **User Feedback**: Submit feedback on the movies and see how others have rated their experience with the platform.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- **Douban API**: For providing the movie data.
- **Echarts**: For the powerful charting library used for visualization.
- **WordCloud**: For the word cloud library used for generating visual representations of text data.

---

This README focuses on the key features and technologies of your project, with detailed instructions for setting it up and using it.