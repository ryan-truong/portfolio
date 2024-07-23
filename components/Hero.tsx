import Image from 'next/image';
import imgSrc from 'public/profile_pic.jpg';
import { FaLinkedinIn, FaGithub} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { SlSocialSpotify } from "react-icons/sl";
import Cube from './Cube';

const Hero = () => {
    return(
        <>
            <div id='heroRef'className="flex flex-col items-center relative top-32 pl-12 sm:pl-0">
                <Image src={imgSrc} width={250} height={250} alt="personal image"
                    className="rounded-full animate-fadeInPicture"
                />
                <div className="mt-10 animate-fadeIn text-center">
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
                    <Cube url='https://www.linkedin.com/in/truong-ryan/' logo='linkedin_logo.jpg'/>
                    <Cube url='https://github.com/ryan-truong' logo='github_logo.png'/>
                    <Cube url='mailto: ryantruong25@gmail.com' logo='mail_logo.jpg'/>
                    <Cube url='https://open.spotify.com/user/ryantruong25?si=be6fbdf538624a7c' logo='spotify_logo.jpg'/>
                </div>
            </div>
        </>
    )
}

export default Hero;