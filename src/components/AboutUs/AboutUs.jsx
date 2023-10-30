

const AboutUs = () => {
    return (
        <div>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                    <div className="hero-overlay backdrop-blur-[4px]"></div>
                    <div className="flex-col lg:flex-row hero-content lg:space-x-5 text-justify text-white">
                        <div className="max-w-sm">
                            <h1 className="mb-5 text-5xl font-bold">About Crafter</h1>
                            <p className="mb-5 font-bold text-lg">At Crafter, we are passionate about crafting innovative technology solutions that empower individuals and businesses to thrive in the digital age. As a forward-thinking tech product company, we pride ourselves on our commitment to creating exceptional products that make a meaningful impact on people's lives.</p>
                        </div>

                        <div className="max-w-sm">
                            <h1 className="mb-5 text-5xl font-bold">Our Vision</h1>
                            <p className="mb-5 font-bold text-lg">Crafter is a team of dedicated and talented professionals who are united by our love for technology and our desire to create products that are not only functional but also beautifully designed. We believe in the power of collaboration and innovation, and our diverse team brings a wealth of knowledge and experience to every project we undertake</p>
                        </div>
                        <div data-aos="zoom-in" className="flex justify-center items-center mt-10">
                            <div className="w-full max-w-sm px-4 py-3 bg-transparent rounded-md shadow-md dark:bg-gray-800 border-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-light text-gray-800 dark:text-gray-400"></span>
                                    <span className="px-3 py-1 text-xs text-indigo-600 uppercase bg-indigo-200 rounded-full dark:bg-blue-300 dark:text-blue-900 font-medium">Contact</span>
                                </div>

                                <div>
                                    <h1 className="mt-2 text-2xl font-semibold text-white dark:text-white">Reach Out to Us</h1>
                                    <p className="mt-2 text-lg font-medium text-white dark:text-gray-300">We value your input and look forward to hearing from you. Whether you have inquiries, feedback, or collaboration opportunities, please don't hesitate to reach out to us. Our team is ready to assist you.</p>
                                </div>

                                <div>
                                    <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">

                                        <div className="flex flex-col w-full border-opacity-50">

                                            <div className="grid h-20 card bg-lime-50 rounded-box place-items-center"><span>E-mail:</span>
                                                <a href='#' className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline" tabIndex="0" role="link"> info@craftertech.com</a></div>
                                            <div className="divider  text-white">Or</div>
                                            <div className="grid h-20 card bg-lime-50 rounded-box place-items-center"><span>Help-Line:</span>
                                                <a href='#' className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline" tabIndex="0" role="link"> +1-123-456-7890</a></div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;