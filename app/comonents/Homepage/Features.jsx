import React from 'react'

function Features() {
    return (
        <div className="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What actually is
                        <br className="hidden lg:inline-block" />Geosuchana
                    </h1>
                    <p className="mb-8 leading-relaxed">GeoSuchana is an open-source web application that provides real-time location-based information, encompassing state, district, municipality, province, and municipality types. It allows users to access relevant data about their current location effortlessly..</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-orange-800 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Learn More</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Documentation</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features