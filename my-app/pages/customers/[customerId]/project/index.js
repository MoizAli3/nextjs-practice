import Link from "next/link";
import { useRouter } from "next/router";

export default function home(){
  const router = useRouter();
  const {customerId} = router.query;  
  return (  
      <div>
           <h1>{customerId} Project Page</h1>
           <Link href={`/customers/${customerId}/project/xyz`}>XYZ</Link>
           <Link href={`/customers/${customerId}/project/ABC`}>ABC</Link>
      </div> 
    );
  }