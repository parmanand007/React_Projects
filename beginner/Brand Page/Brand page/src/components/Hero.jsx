const HeroSection = ()=>{
    return (
    <main className="hero">
        <div className="hero-content">
        <h1>Your Feet Deserve the Best</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eos? Ipsa consectetur voluptas sequi dolor laudantium. Quo veniam necessitatibus magnam!</p>
        
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
            <p>Also Availabe On</p>
            <div className="brand-icons">
                <img src="/imgaes/amazon.png" alt="amazon-logo" />
                <img src="/imgaes/flipkart.png" alt="flipkart-logo" /></div>
            </div> 
        </div>
        <div className="hero-image">
            <img src="/imgaes/shoe_image.png" alt="hero-image" />
        </div>
    </main>
    );
}

export default HeroSection;