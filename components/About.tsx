import dynamic from 'next/dynamic'

const Globe = dynamic(import('react-globe.gl'), { ssr: false });

const About = () => {
    const labelData = [
        {
            lat:32.715736,
            lng: -117.161087,
            text: "San Diego, CA",
            color: 'rgb(37 99 235)'
        },
        {
            lat:34.0522,
            lng: -118.2437,
            text: "Los Angeles, CA",
            color: 'rgba(255, 165, 0, 0.75)'
        },
        {
            lat:28.538336,
            lng: -81.379234,
            text: "Orlando, FL",
            color: 'rgba(255, 165, 0, 0.75)'
        },
        {
            lat:51.0447,
            lng: -114.0719,
            text: "Calgary, AB",
            color: 'rgba(255, 165, 0, 0.75)'
        },
        {
            lat:32.7767,
            lng: -96.7970,
            text: "Dallas, TX",
            color: 'rgba(255, 165, 0, 0.75)'
        },
        {
            lat:39.9526,
            lng: -75.1652,
            text: "Philadelphia, PA",
            color: 'rgba(255, 165, 0, 0.75)'
        },
        {
            lat:36.1716,
            lng: -115.1391,
            text: "Las Vegas, NV",
            color: 'rgba(255, 165, 0, 0.75)'
        },
]

    return(
        <div className="flex flex-row items-center justify-between">
            <p className="ml-32 animate-fadeIn text-lg">
                My name is <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Ryan Truong</span> and I am a recent <span className="text-blue-600">UCSD</span> graduate.
                My studies focused in <span className="text-green-400">Bioinformatics</span> with a minor in <span className="text-fuchsia-500">Computer Science</span>.
                On my free time I enjoy hanging out with friends, playing sports,
                and playing video games.
            </p>
            <div className="flex flex-col">
                <Globe
                    width={700}
                    height={500}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                    labelsData={labelData}
                    labelSize={1.5}
                    labelDotRadius={1}
                    labelColor={(d: any) => {
                        if(d.text === "San Diego, CA"){
                            return('rgb(37 99 235)')
                        }
                        else{
                            return('rgba(255, 165, 0, 0.75)')
                        }
                    }}
                    labelResolution={2}
                />
                <h1 className="italic text-center text-sm animate-fadeIn">look around to see where <span className="text-amber-300">i&apos;ve been</span></h1>
                <h1 className="italic text-center text-sm animate-fadeIn">see where <span className="text-blue-600">i live</span></h1>
            </div>
        </div>
    )
}

export default About