import { NavLink, useLoaderData } from "react-router-dom";

const ProductsDetails = () => {
    const products = useLoaderData();
    const text = 'font-medium text-lg text-gray-400';
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={products.img} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {products.name}</h2>
                    <p className={text}>BrandName: {products.brandName}</p>
                    <p className={text}>Type: {products.type}</p>
                    <p className={text}>Price: {products.price}</p>
                    <p className={text}>Rating: {products.rating}</p>
                    <p className={text}>Description: {products.description}</p>
                    <div className="card-actions justify-end">
                        <NavLink to={`/Update/${products._id}`}><button className="btn btn-primary">Update</button></NavLink>

                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;