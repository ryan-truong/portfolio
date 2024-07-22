import router from 'next/router'
import { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Mesh } from 'three'

interface CubeProps{
    logo: string
    url: string
}

const Cube: React.FC<CubeProps> = props => {
    return(
        <>
        <div className="hover:cursor-pointer w-24 mr-5" title={props.url}>
            <Canvas>
                <ambientLight intensity={1.75} />
                <directionalLight  position={[0,0,0]} />
                <MyMesh url={props.url} logo={props.logo}/>
            </Canvas>
        </div>
        </>
    )
}

const MyMesh: React.FC<CubeProps> = props => {
    const mesh = useRef<Mesh>(null!);

    useFrame( (state, delta) => {
        mesh.current.rotation.y += delta * -0.4;
    })

    const texture = useLoader(TextureLoader, props.logo)

    const handleClick = () => {
        router.push(props.url)
    }
    return(
        <mesh ref={mesh} onClick={handleClick}>
            <boxGeometry args={[2,2,2]}/>
            <meshStandardMaterial map={texture}/>
        </mesh>
    )
}

export default Cube;