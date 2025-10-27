// --- API Configuration ---
const API_KEY = '   '; // Replace with your API key
const API_URL = 'https://api.themoviedb.org/3/search/movie';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Path to your custom default image for movies with no poster
const DEFAULT_POSTER = '/img/ChatGPT Image Jun 20, 2025, 09_06_39 PM.png'; // ✅ <- Use your own image path here

document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviews');

    // Load reviews on page load
    loadReviews();

    // Handle form submission
    reviewForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const movieNameInput = document.getElementById('movieName').value;
        const rating = document.getElementById('rating').value;
        const comment = document.getElementById('comment').value;

        const posterUrl = await getMoviePoster(movieNameInput);

        const review = {
            movieName: movieNameInput,
            rating,
            comment,
            posterUrl
        };

        saveReview(review);
        displayReview(review);
        reviewForm.reset();
    });

    // Get movie poster from API or return custom default image
    async function getMoviePoster(movieQuery) {
        try {
            const response = await fetch(`${API_URL}?api_key=${API_KEY}&query=${encodeURIComponent(movieQuery)}`);
            const data = await response.json();

            if (data.results && data.results.length > 0 && data.results[0].poster_path) {
                return `${IMAGE_BASE_URL}${data.results[0].poster_path}`;
            } else {
                return DEFAULT_POSTER; // Use custom fallback image
            }
        } catch (error) {
            console.error('Movie API error:', error);
            return DEFAULT_POSTER; // Use custom fallback when fetch fails
        }
    }

    function saveReview(review) {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.forEach(displayReview);
    }

    // Create star rating from numeric value
    function generateStarRating(rating) {
        const filled = '★';
        const empty = '☆';
        const stars = filled.repeat(rating) + empty.repeat(5 - rating);
        return stars;
    }

    // Render a review on the page
    function displayReview(review) {
        const div = document.createElement('div');
        div.classList.add('review-card');

        const starRating = generateStarRating(parseInt(review.rating));

        div.innerHTML = `
            <img src="${review.posterUrl}" alt="${review.movieName} Poster">
            <div class="review-content">
                <h3 style="color: aliceblue">${review.movieName}</h3>
                <div class="rating">
                    <span class="stars">${starRating}</span>
                    <span class="rating-number">(${review.rating} out of 5)</span>
                </div>
                <p class="comment">"${review.comment}"</p>
            </div>
        `;
        document.getElementById('reviews').appendChild(div);
    }
});

