import Child from "./child";

export async function generateMetadata({params}){
    const name = (await params).name
    return {
        title: name === 'inna' ? "Инна" : "Валентин"
    }
  };

export default async function Main({params}){
   const name = (await params).name
    return<>
    <Child name={name}/>
    </>
}