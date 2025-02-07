import React, { useEffect, useState, useRef } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());
    const canvas = useRef(null);
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        class ClockCalc {
            constructor(id) {
                this.id = id;
                this.canvas = canvas.current;
                this.pen = this.canvas.getContext("2d");
            }
            drawCircle() {
                // 시간
                for (let i = 0; i <= 360; i += 6) {
                    for (let r = 135; r <= 137; r++) {
                        this.pen.fillStyle = "#ddd";
                        const deg = i * Math.PI / 180
                        const cos = Math.cos(deg) * r;
                        const sin = Math.sin(deg) * r;
                        this.modiDot(cos, sin);
                    }
                }
                // 분
                for (let i = 0; i <= 360; i += 30) {
                    for (let r = 127; r <= 140; r++) {
                        this.pen.fillStyle = "#fff";
                        const deg = i * Math.PI / 180
                        const cos = Math.cos(deg) * r;
                        const sin = Math.sin(deg) * r;
                        this.modiDot(cos, sin);
                    }
                }
            }
            nowTime(time, size) {
                const deg = time * Math.PI / 180;
                if (Math.cos(deg) >= 0) {
                    if (Math.abs(Math.cos(deg)) < 1e-10) {
                        for (let i = 0; i <= size; i += 0.05) {
                            this.modiDot(0, i);
                        }
                    } else {
                        for (let i = 0; i <= Math.cos(deg) * size; i += 0.05) {
                            const f = Math.tan(deg) * i;
                            this.modiDot(i, f);
                        }
                    }
                }
                else {
                    if (Math.abs(Math.cos(deg)) < 1e-10) {
                        for (let i = 0; i <= size; i += 0.05) {
                            this.modiDot(0, -i);
                        }
                    } else {
                        for (let i = 0; i > Math.cos(deg) * size; i -= 0.05) {
                            const f = Math.sin(deg) / Math.cos(deg) * i;
                            this.modiDot(i, f);
                        }
                    }
                }
            }
            modiDot(x, y) {
                this.pen.fillRect((this.canvas.width / 2) + x, (this.canvas.height / 2) - y, 1, 1);
            }
            run(currentTime) {
                const { nowHour, nowMinutes, nowSeconds } = currentTime;
                this.pen.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.pen.fillStyle = "#fff";
                this.drawCircle();
                this.nowTime(nowHour, 80);
                this.nowTime(nowMinutes, 95);
                this.nowTime(nowSeconds, 105);
            }
        }
        const clock = new ClockCalc("clock");
        const currentTime = {
            nowHour: (((12 - Number(time.getHours()) + (-Number(time.getMinutes()) / 60)) * 30)) + 90,
            nowMinutes: ((60 - Number(time.getMinutes())) * 6) + 90,
            nowSeconds: ((60 - Number(time.getSeconds())) * 6) + 90,
        }
        clock.run(currentTime);
    }, [time]);
    return (
        <canvas ref={canvas} className="canvas" width={300} height={300}></canvas>
    )
}

export default Clock;