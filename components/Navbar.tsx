import Link from 'next/link'

const Navbar = () => {

    return(
        <nav className = 'flex justify-between p-6'>
            <Link href="/" className = 'hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 italic flex flex-col text-lg mt-1.5 sm:flex-row ml-5'>
                <div className='sm: mr-4'>R Y A N</div>
                <div>T R U O N G</div>
            </Link>
            <div className = 'flex mt-1'>
                <Link href="/about" className = 'hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mr-2 sm:mr-10 text-lg'>About</Link>
                <Link href="/projects" className = 'hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mr-2 sm:mr-10 text-lg'>Projects</Link>
                <Link href='/RyanTruong_Resume.pdf' className = 'hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mr-1 sm:mr-5 text-lg'>Resume</Link>
            </div>
        </nav>
    )
}

export default Navbar