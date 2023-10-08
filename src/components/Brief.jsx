import {Title} from "./ui/Title";
import {Button} from "./ui/Button";

export const Brief = () => (
    <section id='brief' className='py-[8rem] border-b-4 border-white'>
        <div className="container">
            <Title className='mb-8'>Brief</Title>
            <p className='text-2xl text-center mb-8 max-w-5xl mx-auto'>
                In project management and creative fields, a brief is a document that outlines the objectives, scope, requirements, and key information about a project. It provides a clear understanding of what needs to be accomplished.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex iusto labore, minus praesentium quos.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex iusto labore, minus praesentium quos.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex iusto labore, minus praesentium quos.
            </p>
            <Button>Fill Now</Button>
        </div>
    </section>
)