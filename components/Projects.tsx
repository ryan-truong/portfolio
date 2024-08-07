import ProjectCard from './ProjectCard'
import fridgescrape from '../public/fridgescrape.png'
import lithub from '../public/TeamLitHub_Banner.png'
import gradecalc from '../public/grade_calculator.png'

export default function Projects() {
    return (
        <>
        <h1 className='mt-32 sm:mt-96 text-center underline pl-12 sm:pl-0'>Projects</h1>
        <div id="projectsRef" className="flex flex-col md:flex-row justify-center text-center items-center mb-20 pl-12 sm:pl-0">
            <div className="lg:ml-4 lg:mr-4 mt-10 animate-fadeInP1">
                <ProjectCard name="FridgeScrape" 
                    description="SD Hacks 2022 project focused on sustainibility. See what recipes are available with a set of ingredients."
                    image={fridgescrape}
                    link="https://github.com/ryan-truong/FridgeScrape/tree/main/fridgescrape"
                />
            </div>
            <div className="lg:ml-4 lg:mr-4 mt-10 animate-fadeInP2">
                <ProjectCard name="LitHub Music Note Taker" 
                    description="A note taking application made in ElectronJS. Annotate music while keeping ultimate organization."
                    image={lithub}
                    link="https://github.com/cse110-fq22-group40/cse110-fq22-group40"
                />
            </div>
            <div className="lg:ml-4 lg:mr-4 mt-10 animate-fadeInP3">
                <ProjectCard name="Grade Calculator" 
                    description="A simple grade calculator that accounts for weights of categories."
                    image={gradecalc}
                    link="https://github.com/ryan-truong/grade-calculator"
                />
            </div>
        </div>
        </>
    )
  }
  