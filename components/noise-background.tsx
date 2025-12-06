"use client"

import { useEffect, useRef } from "react"

export function NoiseBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const gl = canvas.getContext("webgl")
        if (!gl) return

        const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

        const fragmentShaderSource = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;

      // GLSL textureless noise functions
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                            0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                           -0.577350269189626,  // -1.0 + 2.0 * C.x
                            0.024390243902439); // 1.0 / 41.0
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i); // Avoid truncation effects in permutation
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
            + i.x + vec3(0.0, i1.x, 1.0 ));

        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = gl_FragCoord.xy/u_resolution.xy;
        st.x *= u_resolution.x/u_resolution.y;

        float time = u_time * 0.2;
        
        // Create an industrial "grunge" flow
        float n = snoise(vec2(st.x * 2.0 + time, st.y * 2.0 - time));
        float n2 = snoise(vec2(st.x * 4.0 - time, st.y * 4.0 + time));
        
        float finalNoise = mix(n, n2, 0.5);
        
        // Dark industrial palette
        vec3 color = vec3(0.05, 0.05, 0.05); // Base dark grey
        
        // Add subtle green/accent flow
        float glow = smoothstep(0.3, 0.8, finalNoise);
        color += vec3(0.75, 0.95, 0.39) * glow * 0.1; // #bef264 tint
        
        // Add "grain" or "static"
        float staticNoise = fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453 + u_time);
        color += vec3(staticNoise) * 0.05;

        gl_FragColor = vec4(color, 1.0);
      }
    `

        const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
            const shader = gl.createShader(type)
            if (!shader) return null
            gl.shaderSource(shader, source)
            gl.compileShader(shader)
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error(gl.getShaderInfoLog(shader))
                gl.deleteShader(shader)
                return null
            }
            return shader
        }

        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
        if (!vertexShader || !fragmentShader) return

        const program = gl.createProgram()
        if (!program) return
        gl.attachShader(program, vertexShader)
        gl.attachShader(program, fragmentShader)
        gl.linkProgram(program)
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return

        const positionBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
        const positions = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

        const positionAttributeLocation = gl.getAttribLocation(program, "position")
        gl.enableVertexAttribArray(positionAttributeLocation)
        gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)

        gl.useProgram(program)

        const timeUniformLocation = gl.getUniformLocation(program, "u_time")
        const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution")

        let startTime = performance.now()

        const render = () => {
            const currentTime = (performance.now() - startTime) / 1000
            gl.uniform1f(timeUniformLocation, currentTime)
            gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height)
            gl.drawArrays(gl.TRIANGLES, 0, 6)
            requestAnimationFrame(render)
        }

        const handleResize = () => {
            canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
            canvas.height = canvas.parentElement?.clientHeight || window.innerHeight
            gl.viewport(0, 0, canvas.width, canvas.height)
        }

        window.addEventListener("resize", handleResize)
        handleResize()
        render()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return <canvas ref={canvasRef} className="w-full h-full opacity-60" />
}
