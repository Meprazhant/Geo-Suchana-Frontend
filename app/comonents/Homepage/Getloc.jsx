import React from 'react'
import Mapcomponent from '../Leaflet/Mapcomponent'

function Getloc() {
    return (
        <div className='p-10 flex w-full'>
            <div className="flex h-96 w-full rounded bg-blue-200 p-5 gap-10">
                <div className="flex flex-col gap-4 w-3/5">
                    <p className='font-bold sm:text-2xl text-xl font-["Poppins"]'>You are in <span className='text-orange-800'>Kachankawal, Jhapa</span></p>
                    <div className="flex p-2 rounded-md bg-slate-200">
                        <p>Latitude: </p>
                        <p>27.43485</p>
                    </div>
                    <div className="flex p-2 rounded-md bg-slate-200">
                        <p>Longitude: </p>
                        <p>87.20394</p>
                    </div>
                    <div className="flex p-2 rounded-md bg-slate-200">
                        <p>District: </p>
                        <p>Jhapa</p>
                    </div>
                    <div className="flex p-2 rounded-md bg-slate-200">
                        <p>Province: </p>
                        <p>Koshi</p>
                    </div>
                    <div className="flex p-2 rounded-md bg-slate-200">
                        <p>Rural Municipality: </p>
                        <p>Kachankawal Rural Municipality</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-2/5 z-10">
                    <Mapcomponent />
                </div>
            </div>

        </div>
    )
}

export default Getloc