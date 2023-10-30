import { NavLink, useLoaderData } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

const AllProduct = () => {

    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts)
    const handleDelete = _id => {
        console.log('delete', _id);
        fetch(`https://crafter-server-a4hvq8zpl-gazi2050.vercel.app/products/${_id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('Product Deleted Successfully');
                    const remaining = products.filter(product => product._id !== _id);
                    setProducts(remaining)
                }
            })

    }

    const text = 'font-medium text-lg text-gray-400';
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loadedProducts ? (
                loadedProducts.map((product) => (
                    <div key={product._id}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure>
                                <img src={product.img} alt="product" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Name: {product.name}</h2>
                                <p className={text}>Brand: {product.brandName}</p>
                                <p className={text}>Type: {product.type}</p>
                                <p className={text}>Price: {product.price}</p>
                                <p className={text}>Rating: {product.rating}</p>
                                <div className="card-actions justify-end">
                                    <NavLink to={`/productDetails/${product._id}`}>
                                        <button className="btn btn-primary">Details</button>
                                    </NavLink>


                                    <button onClick={() => handleDelete(product._id)}
                                        className="btn btn-primary">Delete</button>
                                    <Toaster />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (<div className="flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>

            )}
        </div>
    );
};

export default AllProduct;
