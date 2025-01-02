import Navbar from "../Navbar/Navbar"
import TechBar from "../TechBar/TechBar"

const Banner = () => {
    return (
        <div className="pb-28 pt-5 text-2xl flex flex-col items-center bg-primary relative justify-center">
            <Navbar /> 
            <p className="text-white">Web developer</p>
            <p className="text-tertiary">Jhovanny Márquez</p>
            <TechBar className="absolute bottom-3 "/>
        </div>
    )
}

export default Banner
