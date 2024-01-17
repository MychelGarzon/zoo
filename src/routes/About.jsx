import Navigation from '../components/Navigation'

const About = () => {
    return (
        <>
            <Navigation />
            <div className='about'>
                <h3>About Zoo</h3>
                <h4>With the Zoo application, you can view photos of various animals categorized as Animals, Birds, Fish, and Insects.</h4>
                <h4>You can navigate through the application, select your favorite animal, give it a heart, or remove it from the list.</h4>
                <h4>This React application defines functions for removing an animal from a zoo, updating the likes of an animal, handling search input, resetting the search input, and configuring routes for a web application.</h4>
                <h4>This are the requeriments to be implemented in this React project:</h4>
                <ul>
                    <li><h4>Loop</h4></li>
                    <li><h4>Spread operator</h4></li>
                    <li><h4>One function for buttons + and -</h4></li>
                    <li><h4>For the search re-rendering, search key in the state</h4></li>
                    <li><h4>Params</h4></li>
                    <li><h4>One state for zoo</h4></li>
                    <li><h4>Header cleanHandler</h4></li>
                    <li><h4>About category</h4></li>
                    <li><h4>Hook ErrorPage</h4></li>
                </ul>
            </div>
        </>
    )
};
export default About;