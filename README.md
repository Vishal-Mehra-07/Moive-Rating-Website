<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
</head>
<body>

  <h1>🎬 Cinescope</h1>
  <p><strong>Cinescope</strong> is a movie discovery web application that lets users explore popular movies, search for specific titles, view must-watch recommendations, and submit their own movie reviews. Built using <strong>HTML, CSS, and JavaScript</strong>, it integrates with <strong>The Movie Database (TMDb) API</strong> to fetch real-time movie details.</p>

  <h2>📁 Project Structure</h2>
  <div class="highlight">
    <pre>
Cinescope/
│
├── home.html          # Landing page with movie search bar
├── moives.html        # Displays popular movies using TMDb API
├── must_watch.html    # Static "Must Watch" movie recommendations
├── rew.html           # Review submission and display page
├── search.html        # Displays movie search results from TMDb
├── rev.js             # JavaScript for handling movie reviews and API calls
├── styles.css         # Common styling for all pages
└── /img/              # Folder for images and icons
    </pre>
  </div>

  <h2>⚙️ Features</h2>
  <ul>
    <li>✅ <strong>Search Movies</strong> – Find any movie by name using the TMDb API</li>
    <li>✅ <strong>Popular Movies</strong> – See trending movies fetched dynamically</li>
    <li>✅ <strong>Must Watch Section</strong> – Handpicked list of recommended films</li>
    <li>✅ <strong>User Reviews</strong> – Submit and store reviews locally using browser storage</li>
    <li>✅ <strong>Responsive UI</strong> – Clean, dark-themed design optimized for all devices</li>
  </ul>

  <h2>🧠 How It Works</h2>
  <p>The app uses <strong>TMDb API</strong> to fetch movie data such as titles, ratings, posters, and overviews.  
  Review submissions are saved in <code>localStorage</code> and displayed instantly.  
  The <code>rev.js</code> file manages all API requests, local storage, and UI rendering.</p>

  <h2>🔑 API Configuration</h2>
  <div class="highlight">
    <pre><code>// Put your API key here
const API_KEY = "";
</code></pre>
  </div>
  

  <h2>🚀 Getting Started</h2>
  <ol>
    <li><strong>Clone this repository:</strong>
      <pre><code>git clone https://github.com/Vishal-Mehra-07/cinescope.git</code></pre>
    </li>
    <li><strong>Open <code>home.html</code></strong> in your browser.</li>
    <li><strong>Replace API key:</strong>  
      Open <code>rev.js</code>, <code>moives.html</code>, and <code>search.html</code>  
      Insert your TMDb API key where indicated.
    </li>
  </ol>

  <h2>💡 Future Improvements Can Be Done</h2>
  <ul>
    <li>Integrate backend for persistent review storage</li>
    <li>Include movie trailers and actor details</li>
    <li>Implement user authentication</li>
  </ul>

  <h2>🧑‍💻 Author</h2>
  <p><strong>Vishal Singh Mehra</strong><br>
  Student at Ajeenkya D Y Patil University, Pune<br>
  

</body>
</html>
