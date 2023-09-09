import React,{useEffect,useState} from "react";
import VisibilitySensor from "react-visibility-sensor";
// import "./index.css";

// Import module and default styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const  CircularProgress=({num})=> {
// const rand=Math.floor(Math.random()*2)
const rand=Math.floor(Math.random() * 1) ;
const [caption,SetCaption]=useState(0)
  useEffect(()=>{

    const timer=setInterval(()=>{

caption<num ? SetCaption(prev=>prev+1) : clearInterval(timer)
    },50)
   return ()=>{
clearInterval(timer)
  }
    // const x=document.querySelectorAll(".CircularProgressbar-path")
    // x.forEach((item)=>{item.style.transition=`stroke-dashoffset 2s ease .5s`;})

  },[caption])
    return (
      <div>
        {/* <div style={{ height: 100, background: "#ddd" }}>
          Placeholder content, scroll down
        </div> */}
        <div style={{ width: "100px",paddingBottom:"20px" }}>
          {/* <p>This should animate only when visible</p> */}
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? num : 0;
              return (
                <CircularProgressbar 
                  value={percentage}
                  
                  text={`${caption}%`}
                  
                  styles={{
                        path: {
                          transition: `stroke-dashoffset 3s ease ${rand}s`,
                        },
                        text:{
                            transitionDelay:"2s"
                        }
                      }}
                      
                //   <CircularProgressbar
                //   styles={{
                //     path: {
                //       transition: 'stroke-dashoffset 0.5s ease 0s',
                //     }
                //   }}
                // />

                  />
              );
            }}
          </VisibilitySensor>
        </div>
      </div>
    );
  
}


export default CircularProgress