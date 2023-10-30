import { useState, useEffect } from "react";

const Review = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('Review.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, []);
    return (
        <div className="p-10 bg-indigo-100">
            <div className="m-3 space-y-5 text-center" >
                <p className="  font-bold text-3xl lg:text-5xl">Reviews</p>
                <p className=" font-semibold text-xl">Explore what our valued customers have to say</p>
            </div>
            <div className="px-2 xl:px-14 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6" >
                {
                    reviews.map(review => <div key={review.id}>
                        <div className="w-full   min-h-full px-8 py-4 lg:mt-10 bg-green-100 rounded-lg shadow-lg dark:bg-gray-800">
                            <div className="flex justify-center -mt-2 md:justify-end">
                                <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={review.img} />
                            </div>

                            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{review.comment_title}</h2>
                            <p className="text-gray-400">{review.date}</p>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{review.comment}</p>

                            <div className="flex justify-end mt-4">
                                <p className="text-lg font-medium text-blue-600 dark:text-blue-300" tabIndex="0" role="link">{review.name}</p>
                            </div>
                        </div>
                    </div>)
                }


            </div>

        </div>
    );
};

export default Review;