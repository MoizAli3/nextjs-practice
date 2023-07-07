import Link from "next/link";

export default function home(props){
  const {todo} = props;
  if(!todo) {
    return <div>Loading...</div>
  }
  return (
    <div>
        <p>{todo.title}</p>
    </div> 
  );
}

export async function getStaticProps ({params}) {

    const {todoId} = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const data = await response.json();
  
    return {
      props: {
        todo: data
      },
      revalidate: 10,
    };
 

}

export async function getStaticPaths(){
  return {
    paths: [
      {
        params: {
          todoId: '1',
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  }
}