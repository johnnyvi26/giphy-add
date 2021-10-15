import React from "react";

function Button (props){
    // const [gifData, setGifData] = React.useState("");

    // const handleClick = (event) => {
    //     //prevent page from refreshing on Button submission
    //     event.preventDefault();
    //     //pass the search term to moviesearch prop, which is apps getMovie function
    //     props.randomGif();
    // };

    return(
        <div>
            {/* <button onClick={handleClick}>Radomize</button> */}
            <button onClick={props.randomGif}>Radomize</button>
        </div>
    );

}

export default Button;