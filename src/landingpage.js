import { useEffect } from "react";
import Axios from "axios";

function LandingPage() {
    const[data,setData] = usedState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);
  ListName=()=>{
    return data.map(val){
        render(<p>val</p>);
    };
  }
  return (
    <div>
      <h1>Landing Page</h1>
      {ListName();}
    </div>
  );
}
export default LandingPage;
