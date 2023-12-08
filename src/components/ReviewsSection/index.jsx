import React, { useState } from 'react'
import styles from "./review.module.css";

import RatingSection from '../RatingSection';




const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    const [displayedReviews, setDisplayedReviews] = useState(5);

    const fetchReviews = () => {
        // Simulate fetching reviews from an API
        // In a real scenario, you would replace this with an actual API call
        // For now, let's generate some fake reviews
        const newReviews = Array.from({ length: 5 }, (_, index) => ({
            id: index + 1,
            text: `Fake Review ${index + 1}`,
            rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
        }));

        // Update the 'reviews' state with the new reviews
        setReviews(prevReviews => [...prevReviews, ...newReviews]);
    };
    const loadMoreReviews = () => {
        // Calculate the maximum number of reviews to display
        const maxDisplayedReviews = Math.min(reviews.length, displayedReviews + 5);

        // Increase the number of displayed reviews, but not more than the total number of reviews
        setDisplayedReviews(maxDisplayedReviews);

        // Fetch more reviews if needed
        fetchReviews();
    };


    return (
        <>
            <div className={`${styles.main_view_fluid} container-fluid`}>
                <div className={`${styles.view_container} container`}>
                    <div className={`${styles.review_section}`}>
                        <div className={`${styles.all_reviews}`}>
                            {/* <h1>All Reviews <span>(451)</span></h1> */}
                            <h1>All Reviews <span>({reviews.length})</span></h1>
                        </div>
                        <div className={`${styles.rating_section}`}>
                            <RatingSection />
                        </div>
                        <div className={`${styles.form_message}`}>
                            <form action="">
                                <textarea name="" id="" rows="7" placeholder='Write a review...'></textarea>
                            </form>
                        </div>

                        {/* Display reviews based on the 'displayedReviews' state */}
                        <div className={`${styles.reviews_list}`}>
                            {reviews.slice(0, displayedReviews).map(review => (
                                <div key={review.id} className={`${styles.review_item}`}>
                                    <p>{review.text}</p>
                                    {/* Add additional details as needed, e.g., review.rating */}
                                </div>
                            ))}
                        </div>

                        <div className={`${styles.loading_reviews}`} onClick={loadMoreReviews}>
                            <p>Load more reviews..</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewSection