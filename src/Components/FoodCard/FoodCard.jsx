import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import UseCart from '../../Hooks/UseCart';

const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item
    const { user } = UseAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = UseAxiosSecure()
    const [ refetch] = UseCart()

    const handleAddToCart = () => {
        if (user && user.email) {
            console.log(user);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                });
        } else {

            Swal.fire({
                title: " you are not logged in?",
                text: "please login to add to the home cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //  send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
                <div className="card-body flex flex-col text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={ handleAddToCart} className="btn btn-outline border-0 hover:bg-amber-400 border-amber-400 border-b-4 mt-4">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;