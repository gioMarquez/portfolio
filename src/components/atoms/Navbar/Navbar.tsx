import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="text-secondary w-full flex justify-center items-center space-x-4 p-4 ">
            <div>
                <Link className='hover:border-b-2' to="/">Home</Link>
            </div>
            <ul className="flex space-x-4">
                <li>
                    <Link className='hover:border-b-2' to="/me">About me</Link>
                </li>
                <li>
                    <Link className='hover:border-b-2' to="/xp">Experience</Link>
                </li>
                <li>
                    <Link className='hover:border-b-2' to="/projects">My projects</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
