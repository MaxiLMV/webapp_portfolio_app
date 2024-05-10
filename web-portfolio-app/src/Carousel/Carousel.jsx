import Carousel from "react-material-ui-carousel";
import Card from "../Card/Card";
import "./Carousel.css";

function Showcase() {
    let cardtext1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas diam. Scelerisque viverra mauris in aliquam sem. Convallis convallis tellus id interdum velit laoreet id. Ante metus dictum at tempor commodo ullamcorper. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Ut etiam sit amet nisl purus. Aliquet nec ullamcorper sit amet risus. Diam quis enim lobortis scelerisque fermentum dui faucibus. Et netus et malesuada fames ac turpis egestas maecenas pharetra.";

    return (
        <div className="carousel-section">
            <Carousel animation="slide">
                <Card type={1} title={"Title/Name of Project0"} text={cardtext1} imageSrc={"https://placehold.co/600x400"} />
                <Card type={1} title={"Title/Name of Project2"} text={cardtext1} imageSrc={"https://placehold.co/600x400"} />
                <Card type={1} title={"Title/Name of Project3"} text={cardtext1} imageSrc={"https://placehold.co/600x400"} />
                <Card type={1} title={"Title/Name of Project4"} text={cardtext1} imageSrc={"https://placehold.co/600x400"} />
                <Card type={1} title={"Title/Name of Project5"} text={cardtext1} imageSrc={"https://placehold.co/600x400"} />
            </Carousel>
            <button className="more-projects-button"><a href="#projects">More Projects</a></button>
        </div>
    );
}

export default Showcase;