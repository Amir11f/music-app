import axios from "axios"
import { NextResponse } from "next/server"

export async function Get(){
    const get = axios.get(`https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg` , {
        headers : {
            'Authorization': `Bearer BQAm9JNCjjFeD4iu76TWahLDcoqxd3cWAxDl55Mbyox96EHJavUzVfFoLphzG0m7bQ4Zun3iF72SnlUUwAupaSI1aaRNySMV4FKPT-OTLusH-kmF_B_hMJ1iAJSCAqSLkQm7V8x1eWdnFP9duVPD9eZtKoKBi7YkbagUkKtt3uxqIkHpz-rdqpfOQu7UYQJn688`
        }
    })

    console.log(get)

    return NextResponse.json(get)

}