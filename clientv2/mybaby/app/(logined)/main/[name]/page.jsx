import Child from "./child";

export default async function Main({params}){
   const name = (await params).name
    return<>
    <Child name={name}/>
    </>
}