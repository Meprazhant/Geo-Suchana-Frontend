import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const body = await request.json()
        const {
            lat, long
        } = body.location
        var url = `${`https://geo-suchana.vercel.app/api/findme?lat=${lat}&lng=${long}`}`

        const res = await fetch(
            url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        const data = await res.json()
        return NextResponse.json({ data, url })
    } catch (error) {
        return NextResponse.json(
            { message: `Server Error ${error}` },
            { status: 500 }
        )
    }
}