import Link from "next/link";
import { useRouter } from "next/router";

export default function home(){
  const router = useRouter();
  const {customerId} = router.query;  
  return (  
      <div>
        <h1>{customerId} Customer Page</h1>
        <Link href="/customers/moiz">moiz</Link><br/>
        <Link href="/customers/ahsan">ahsan</Link>
      </div> 
    );
  }