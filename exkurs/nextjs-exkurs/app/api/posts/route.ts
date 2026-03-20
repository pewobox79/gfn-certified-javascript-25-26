export function GET(){

    return Response.json({msg:"Nachricht von api/posts"})

}

export async function POST(req){

    const body = await req.json()
    return Response.json({msg: "post request auf posts", bodyData: JSON.stringify(body)})
}