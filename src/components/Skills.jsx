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
            <article className="skills-header"></article>
            <section className="skills-canvas-area">
                <canvas className="skills-canvas"></canvas>
                <canvas className="skills-canvas"></canvas>
            </section>

        </section>
    )
}

export default Skills;