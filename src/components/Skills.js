import React , {useState, useRef, useEffect} from "react";
import "../styles/Skills.scss"

const Skills = () => {
    const skillsCanvas = useRef(null);
    
    // useEffect(()=>{
    //     class SkillsCanvas{
    //         constructor(id){
    //             this.canvas = document.getElementById("canvas");
    //             if (!this.canvas) throw new Error("Canvas not found!");
    //             this.pen = document.getElementById("canvas").getContext("2d");
    //         }
    //         modiDot(){

    //         }
    //         run(){

    //         }
    //     }

    //     const skillsGraph = new SkillsCanvas("skillsGraph");
    //     skillsGraph.run();
    // },[]);

    return(
        <section className="Skills-wrapper">
            {/* 회전하는 프리즘 원 */}

            <article className="skills-header"></article>
            <canvas ref={skillsCanvas} id="skillsCanvas" className="skills-canvas"></canvas>
        </section>
    )
}

export default Skills;