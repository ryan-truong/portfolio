import ProjectCard from './ProjectCard'
import fridgescrape from '../public/fridgescrape.png'
import lithub from '../public/TeamLitHub_Banner.png'
import gradecalc from '../public/grade_calculator.png'

export default function Projects() {
    return (
        <div id="projectsRef" className="flex flex-wrap flex-row justify-center mt-96 mb-20">
            <div className="ml-4 mr-4 mt-10 animate-fadeInP1">
                <ProjectCard name="FridgeScrape" 
                    description="SD Hacks 2022 project focused on sustainibility. See what recipes are available with a set of ingredients."
                    image={fridgescrape}
                    link="https://github.com/ryan-truong/FridgeScrape/tree/main/fridgescrape"
                />
            </div>
            <div className="ml-4 mr-4 mt-10 animate-fadeInP2">
                <ProjectCard name="LitHub Music Note Taker" 
                    description="A note taking application made in ElectronJS. Annotate music while keeping ultimate organization."
                    image={lithub}
                    link="https://github.com/cse110-fq22-group40/cse110-fq22-group40"
                />
            </div>
            <div className="ml-4 mr-4 mt-10 animate-fadeInP3">
                <ProjectCard name="Grade Calculator" 
                    description="A simple grade calculator that accounts for weights of categories."
                    image={gradecalc}
                    link="https://github.com/ryan-truong/grade-calculator"
                />
            </div>
        </div>
    )
  }
  