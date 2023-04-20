import ProjectCard from '../../components/ProjectCard'



export default function Projects() {
    return (
        <div className="flex flex-wrap flex-row justify-center">
            <div className="ml-4 mr-4 mt-10 animate-fadeInP1">
                <ProjectCard name="FridgeScrape" 
                    description="SD Hacks 2022 project focused on sustainibility. See what recipes are available with a set of ingredients."
                    image="/../public/fridgescrape.png"
                    link="https://github.com/ryan-truong/FridgeScrape/tree/main/fridgescrape"
                />
            </div>
            <div className="ml-4 mr-4 mt-10 animate-fadeInP2">
                <ProjectCard name="LitHub Music Note Taker" 
                    description="A note taking application made in ElectronJS. Annotate music while keeping ultimate organization."
                    image="/../public/TeamLitHub_Banner.png"
                    link="https://github.com/cse110-fq22-group40/cse110-fq22-group40"
                />
            </div>
            <div className="ml-4 mr-4 mt-10 animate-fadeInP3">
                <ProjectCard name="Grade Calculator" 
                    description="A simple grade calculator that accounts for weights of categories."
                    image="/../public/grade_calculator.png"
                    link="https://github.com/ryan-truong/grade-calculator"
                />
            </div>
        </div>
    )
  }
  