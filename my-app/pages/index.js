import Link from "next/link";

export default function home(props){
  const {title,todos} = props;
  if(!todos){
    return <div>Loading......</div>;
  }
  const todoList = todos.map( todo =>{
    return (<li key={todo.id}>
      <p>{todo.title}</p></li>)
  });
  return (
    <div>
      <h1>{title} Home</h1>
      <Link href="/customers">Go to Customer</Link>
      {todoList}
    </div> 
  );
}

export async function getStaticProps(){

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const data = await res.json();

  console.log(data);

  return {
    props:{
      title:"Hello",
      todos: data
    },
    notFound: false,
    revalidate: 10
    // const res = fetch() 

  };   
}