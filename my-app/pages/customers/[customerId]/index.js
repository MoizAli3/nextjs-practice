import Link from "next/link";
import { useRouter } from "next/router";
export default function home(){
  const router = useRouter();
  const {customerId} = router.query;  
  return (  
    
      <div>
           <h1>{customerId} Deatils Page</h1>  
           <Link href={`/customers/${customerId}/project`}>Project</Link><br/>
           <h5>XYZ</h5>
      </div> 
    );
  }