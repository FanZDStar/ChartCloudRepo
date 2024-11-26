<!--
 * @Author: ourEDA MaMing
 * @Date: 2024-11-26 19:15:35
 * @LastEditors: ourEDA MaMing
 * @LastEditTime: 2024-11-26 19:24:49
 * @FilePath: \Flask\README.md
 * @Description: 李猴啊
 * 
 * Copyright (c) 2024 by FanZDStar , All Rights Reserved. 
-->
# Douban Top 250 Movies Data Visualization

This project is a data visualization tool that presents insights from the **Douban Top 250 Movies** list. Built with **Python**, **Flask**, **Echarts**, and **WordCloud**, it allows users to interact with movie data and explore different visualizations. The tool also features a **word cloud generator**, offering an insightful view of the most common words in the movie titles and descriptions.

## Features

- **Douban Top 250 Movies Data**: Visualizes data including movie names, ratings, genres, and other key attributes.
- **Interactive Charts**: Utilizes **Echarts** to display various movie statistics and trends in an interactive format.
- **Word Cloud Generator**: Automatically generates a word cloud based on movie titles and descriptions, using the **WordCloud** Python library.
- **Flask Web Framework**: Serves as the backend for handling requests and rendering visualizations on the web interface.

## Technologies

- **Python**: Main programming language for data processing and backend functionality.
- **Flask**: Web framework used to serve the app and handle routing.
- **Echarts**: JavaScript library used to create interactive, responsive charts for data visualization.
- **WordCloud**: Python library for generating word clouds from text data.

## Setup Instructions

1. Clone this repository:

    ```bash
    git clone https://github.com/yourusername/your-repository-name.git
    cd your-repository-name
    ```

2. Install required dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Run the Flask app:

    ```bash
    python app.py
    ```

4. Open your browser and navigate to `http://localhost:5000` to view the data visualizations.

## Usage

- Visit the homepage to see an interactive chart showcasing various statistics from the **Douban Top 250**.
- Use the **word cloud** tool to visualize the most common terms from movie titles and descriptions.
- You can filter and interact with the charts to gain deeper insights into the data.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- Thanks to the **Douban API** for providing the movie data.
- Special thanks to the developers of **Echarts** and **WordCloud** for creating excellent libraries for data visualization and text processing.
