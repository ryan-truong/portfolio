import Image from 'next/image'
import imgSrc from 'public/profile_pic.jpg'
import { FaLinkedinIn, FaGithub} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { SlSocialSpotify } from "react-icons/sl";

const Hero = () => {
    return(
        <>
            <div className="flex flex-col items-center mt-12">
                <Image src={imgSrc} width={250} height={250} alt="personal image"
                    className="rounded-full animate-fadeInPicture"
                />
                <div className="mt-5 animate-fadeIn text-center">
                    <h1>Hello! I&apos;m
                        <span className="pl-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                            Ryan Truong
                        </span>
                    </h1>
                    <h1 className="pt-2">A developer with a passion for 
                        <span className="pl-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                            Web Development
                        </span>
                    </h1>
                </div>
                <div className="flex animate-fadeIn mt-3">
                    <a className="rounded-md border-4 mt-5 mr-4 shadow-lg shadow-pink-500/75 hover:shadow-cyan-500/75" 
                    href="https://www.linkedin.com/in/truong-ryan/">
                        <FaLinkedinIn className="w-10 h-10 p-2"/>
                    </a>
                    <a className="rounded-md border-4 mt-5 mr-4 shadow-lg shadow-cyan-500/75 hover:shadow-pink-500/75"
                    href="https://github.com/ryan-truong">
                        <FaGithub className="w-10 h-10 p-2"/>
                    </a>
                    <a className="rounded-md border-4 mt-5 mr-4 shadow-lg shadow-pink-500/75 hover:shadow-cyan-500/75 "
                    href="mailto: ryantruong25@gmail.com">
                        <HiMail className="w-10 h-10 p-2"/>
                    </a>
                    <a className="rounded-md border-4 mt-5 mr-4 shadow-lg shadow-cyan-500/75 hover:shadow-pink-500/75"
                    href="https://open.spotify.com/user/ryantruong25?si=be6fbdf538624a7c">
                        <SlSocialSpotify className="w-10 h-10 p-2"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero;