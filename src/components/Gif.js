import React from "react";

function Gif({gif}) {
    if(gif) {
        return (
            <div>
                <img src={gif.data.images.original.url} alt="hello" />
            </div>
        );
    } else {
        return (
            <div>
                No gif loaded...yet ;)
            </div>
        );
    }

}

export default Gif;