const Footer = () => {
    return (
        <div className="p-8">
            <div className="m-20 flex flex-row justify-center items-center">
                <div className="w-2/4 h-px bg-gray-400"></div>
                <div><h2 className="text-center italic text-3xl">Testimonials</h2></div>
                <div className="w-2/4 h-px bg-gray-400"></div>
            </div>
            <div className="flex justify-center gap-1 items-center">
                <div>
                    <img className="w-26 h-28"
                         src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"/>
                </div>
                <div className="w-5/6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid, aut culpa dolor eaque ex
                        fugiat hic, inventore iure libero maiores nobis odio perspiciatis qui, quidem quod sed veritatis
                        voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid, aut culpa
                        dolor eaque ex
                        fugiat hic, inventore iure libero maiores nobis odio perspiciatis qui, quidem quod sed veritatis
                        voluptates?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;