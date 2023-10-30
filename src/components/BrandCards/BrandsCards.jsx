import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const BrandsCards = () => {
    const [Cards, setCards] = useState([]);

    useEffect(() => {
        fetch('Brand.json')
            .then(res => res.json())
            .then(data => {
                setCards(data);
            });
    }, []);

    return (
        <div className="bg-indigo-50 p-10">
            <p className="text-center text-2xl font-bold md:text-4xl lg:text-5xl">
                Our trusted Brands
            </p>

            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {
                        Cards.map(card => <div key={card.id}>
                            <div className="card  bg-base-100 shadow-xl image-full">
                                <figure><img src={card.img} /></figure>
                                <div className="card-body">
                                    <h2 className="font-bold text-center text-5xl">{card.title}</h2>
                                    <div className="card-actions justify-center mt-40">
                                        <NavLink to='/allProduct'><button className="btn text-indigo-600 font-bold hover:text-white hover:bg-indigo-600">Visit Now</button></NavLink>

                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default BrandsCards;