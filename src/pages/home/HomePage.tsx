import type React from "react";
import Navbar from "../../components/navbar/Navbar";
import VideoHero from "../../components/homepage/VideoHero";
import HeroBrandsSection from "../../components/homepage/HeroBrandsSection";




 const HomePage:React.FC = () => {
    return (
        <div>
            <Navbar />
            <VideoHero />
            <HeroBrandsSection />
            <h1>Home Page</h1>
        </div>
    );
};

export default HomePage;