import Link from 'next/link'

const Navbar = () => {

    return(
        <nav className = 'flex p-4 fixed min-w-full z-10 bg-pink-500/5'>
            <button className = 'hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 italic flex flex-col text-3xl mt-1.5 sm:flex-row ml-5' onClick={() => {
                    const heroRef = document.querySelector("#heroRef")
                    heroRef!.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}>
                    RYAN TRUONG
            </button>
            <div className = 'flex mt-1 ml-auto'>
                <button className = 'hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mr-2 sm:mr-10 text-lg' onClick={() => {
                    const aboutRef = document.querySelector("#aboutRef")
                    aboutRef!.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}>
                    About
                </button>
                <button className = 'hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mr-2 sm:mr-10 text-lg' onClick={() => {
                    const  projectsRef = document.querySelector("#projectsRef")
                    projectsRef!.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}>
                    Projects
                </button>
                <button>
                    <Link href='/RyanTruong_Resume.pdf' className = 'hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mr-1 sm:mr-5 text-lg'>Resume</Link>
                </button>
            </div>
        </nav>
    )
}

export default Navbar