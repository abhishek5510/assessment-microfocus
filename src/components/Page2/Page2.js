import { useEffect,useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import "./Page2.css";


function Page2(props){
    const [show,setShow] = useState();
    const [center,setCenter] = useState();
    const [lright,setLright] = useState();
    const location = useLocation()
    const navigate = useNavigate();
    useEffect(() => {
        setShow(location.state.drag);
        setCenter(location.state.cen);
        setLright(location.state.lr); 
     }, [location]);
     const handlePageChange = event => {
        navigate('/', { state: { drag:show, cen: center, lr:lright, flag:1 }})
    };
    return(
        <div>
            <h1>Page2</h1>
            <div className="aling-center">
                <h1 style={{textAlign:"center"}}>About Me</h1>
                <p style={{margin:"5px"}}>Hi viewer, My name is Abhishek Nath Dubey.</p>
                <p style={{margin:"5px"}}>Apart from being a passionate Software Engineer, I am also a writer, I write my own philosophy and I love writing poems as well as some short stories</p>
                <p style={{margin:"5px"}}>Below I have mentioned one of my writing</p>
                <p style={{margin:"5px"}}>Have a look, I hope you will like it too....
                </p>
                <p className="empasis">
                Feeling the winds finding the way, is it just the waves......<br/>
                All alone sailing in the night....<br/>
                I have no way to prove who am l....<br/>
                In the depth i kept all ,never showed how i felt when i was forced to stay out.....<br/>
                Okay the wind okay the sky I will come back loud let the things be it's just a piece of night..... I will come back hard<br/>
                </p>
            </div>
            <button className="button" onClick={handlePageChange}>Back</button>
        </div>
    )
}
export default Page2;