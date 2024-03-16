const Banner = () => {
    return(
        <div>
            <div className="hero max-w-100%" style={{backgroundImage: 'url(/images/banner.png)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-[80%]">
                    <h1 className="mb-5 text-5xl font-bold">Discover and exceptional cooking class tailored for you!!</h1>
                    <p className="mb-5">Exceptional cooking tip: Let meat rest after cooking to redistribute juices, ensuring juiciness. Use a meat thermometer for precision.</p>
                    <div className="flex gap-10 justify-center items-center">
                        <button className="btn btn-primary rounded-full">Explore Now</button>
                        <button className="btn bg-gray-200 rounded-full">Our feedback</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Banner;