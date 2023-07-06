import Link from "next/link";
import { useRouter } from "next/router";

export default function home(){
  const router = useRouter();
  const {projectId} = router.query;  
  return (  
      <div>
           <h1>{projectId} Project Page</h1>  
      </div> 
    );
  }