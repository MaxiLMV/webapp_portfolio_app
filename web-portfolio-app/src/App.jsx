import Header from "./Header/Header.jsx";
import Showcase from "./Carousel/Carousel.jsx";
import Card from "./Card/Card.jsx";
import Posts from "./Posts/Posts.jsx";
import "./index.css";

function App() {
    let cardtext1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas diam. Scelerisque viverra mauris in aliquam sem. Convallis convallis tellus id interdum velit laoreet id. Ante metus dictum at tempor commodo ullamcorper. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Ut etiam sit amet nisl purus. Aliquet nec ullamcorper sit amet risus. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et netus et malesuada fames ac turpis egestas maecenas pharetra.";

    return(
        <>
            <Header />
            <Showcase />
            <Posts />
            <div id="projects" className="project-grid">
                <Card type={2} title={"Title/Name of Project0"} text={cardtext1} imageSrc={"https://placehold.co/300"} languages={"C#"} year={"2024"} />
                <Card type={2} title={"Title/Name of Project1"} text={cardtext1} imageSrc={"https://placehold.co/300"} languages={"C++"} year={"2024"} />
                <Card type={2} title={"Title/Name of Project2"} text={cardtext1} imageSrc={"https://placehold.co/300"} languages={"Java"} year={"2024"} />
                <Card type={2} title={"Title/Name of Project3"} text={cardtext1} imageSrc={"https://placehold.co/300"} languages={"Python"} year={"2024"} />
                <Card type={2} title={"Title/Name of Project4"} text={cardtext1} imageSrc={"https://placehold.co/300"} languages={"C#"} year={"2024"} />
                <Card type={2} title={"Title/Name of Project5"} text={cardtext1} imageSrc={"https://placehold.co/300"} languages={"C#"} year={"2024"} />
                <Card type={2} title={"Title/Name of Project6"} text={cardtext1} imageSrc={"https://placehold.co/300"} languages={"C#"} year={"2024"} />
            </div>
        </>
    );
}

export default App
