import { React, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Link,useNavigate,useLocation } from "react-router-dom";
import styled, { css } from 'styled-components'
import "./Page1.css";
function Page1(props) {
  const [color, setColor] = useState();
  const [hey, setHey] = useState([]);
  const [show,setShow] = useState(true);
  const [center,setCenter] = useState(false);
  const [lright,setLright] = useState(false);
  const [flag,setFlag] = useState(false);
  const [parent,setParent] = useState("parent")
  const location = useLocation()
  let navigate = useNavigate();

    const handlePageChange = event => {
      navigate('/page2', { state: { drag:show, cen: center, lr:lright }})
    };
    function handleLocationChange(event) {
      if(event.target.value==='center'){
          setCenter(true)
          setShow(false)
          setLright(false)
      }
      else{
          setLright(true)
          setCenter(false)
          setShow(false)
      }
    }
    useEffect(() => {
      if(location.state!=null){
        setShow(location.state.drag);
        setCenter(location.state.cen);
        setLright(location.state.lr); 
        setColor('blue')
        setFlag(true)
        navigate(location.pathname, { replace: true });
      }
   }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setHey(new Date().toLocaleString().split(","));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        enterFunction()
      }
      else if(event.code === "Escape" || event.code === "NumpadEscape"){
        event.preventDefault();
        escapeFunction()
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);
  function enterFunction(){
    setShow(true)
  }
  function escapeFunction(){
    setShow(false)
    setCenter(false)
    setLright(false)
  }
  function handleDrag(){
    console.log("dragging")
  }
  function dragTask(event) {
    console.log("logic goes here")
  }
  return (
    <div>
      <header className="navbar">
        <div className="container">
          <h4 className="margine">Postions:</h4>
          <fieldset onChange={(event) => handleLocationChange(event)}>
            <input type="radio" value="center" checked={center}/>{" "}
            <span className="center">Center</span>
            <input type="radio" value="lower-right" checked={lright}/>{" "}
            <span className="center">Lower-Right</span>
          </fieldset>

          <h1 className="clock">{hey[1]}</h1>
        </div>
      </header>
      <div className="color">
        {show && <Draggable bounds={parent} onDrag={handleDrag}>
            <div className="box" style={{borderColor:color}} >Floating.....
            <br/><span className="center">Drag me around</span>
            </div>
        </Draggable>}
        {center && 
          <div className="box1" style={{borderColor:color}}>Center.....
        <br/><span className="center">Drag me around</span></div> }
        {lright && <div className="box2" style={{borderColor:color}}>Lower Right.....
        <br/><span className="center">Drag me around</span></div>}
      </div>
      <footer className="navbar1">
        <h4 className="aling2 center"><button onClick={handlePageChange} className="button1">Go to Page2</button></h4>
      </footer>
    </div>
  );
}

export default Page1;
