import React, {useEffect, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../services/firebaseConfig';

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const collectionCategories = collection(database,"categories");
        getDocs(collectionCategories)
            .then((res) => {
                const categories = res.docs.map((cat) => {
                    return {
                        id: cat.id,
                        ...cat.data(),
                    };
                });
                setCategories(categories);
            })
            .catch ((error) => {
                console.log(error);
            });
    }, []);

    return (
        <nav className='navbar'>
            <Link to="/">
                <img src="img/logo/gpit.svg" alt="Logo gpit" width="" height="30" class="d-inline-block align-text-top"></img>
                <h1>gpIT</h1>
            </Link>
            <ul>
                {categories.map((cat) => (
                    <NavLink key={cat.id} to={`/category/${cat.path}`}>
                        {cat.name}
                    </NavLink>
                ))}
            </ul>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default NavBar;