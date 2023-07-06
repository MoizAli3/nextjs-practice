import Link from "next/link";
export default function home(){
  return (
    <div>
      <h1>Home</h1>
      <Link href="/customers">Go to Customer</Link>
    </div> 
  );
}