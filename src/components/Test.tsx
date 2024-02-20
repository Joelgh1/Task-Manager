import {useLoaderData} from "react-router-dom";

export async function loader({params}){
    const data = await params.num
    return {data}
}
export function Test(){

    const data = useLoaderData()

    return(
        <h1>Test {data.data}</h1>
    )
}