import { useRouter } from "next/router";

export default function home(){
    const router = useRouter();
    const {data} = router.query;
    // console.log(router.query);
    return (
      <div>
        <h1>{data} Testing</h1>
      </div> 
    );
  }