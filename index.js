import React from "react";
import ReactDOM from "react-dom/client";

// creating react elememts

const heading = React.createElement("h1", {id: "heading"}, "React show time");

// const jsxheading = <h1 id="heading">React time</h1>;

    // react functional components

// const Title = () => <h1>Functional component</h1>;

const Header = () => (


    <div className={"header"}>

        <div className={"nav-items"}>
            <ul><li><a href={"#"}>Home</a></li>
                <li><a href={"#"}>About</a></li>
                <li><a href={"#"}>Cart</a></li>

            </ul>
        </div>


    </div>
);


const Restaurantcard = () => (

    <div className={"res-card"}>
        <h3>Atul foods</h3>

        <div className={"search"}>
            <input type={"text"} name={"search"} id={"search"} placeholder={"search this website"}>
            </input>
        </div>

        <p>...This is a resturant collection which will help in making appropriate decision about your food selection.</p>
        <p>lorem32</p>
        <a href="https://google.com" class={"btn"}>Read more</a>
        <button class={"btn"}>Contact us</button>
    </div>
)
const Body = () => (

    <div className={"body"}>
        <div className={"logo-container"}>
            <img
                className="logo"
                src="https://cdn5.vectorstock.com/i/1000x1000/05/19/food-delivery-logo-and-restaurant-design-vector-30900519.jpg"/>
        </div>

        <div className={"resturant container"}>
            {<Restaurantcard/>}
        </div>

    </div>
);

const Applayout = () => (
    <div>
        {<Header/>}
        {<Body/>}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);
