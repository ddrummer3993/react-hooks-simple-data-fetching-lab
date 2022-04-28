import React, { useEffect, useState } from "react";

function App() {
    
    const [isLoading, setLoading] = useState(false);
    const [dogData, setDogData] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((resp) => resp.json())
            .then((data) => {
                setDogData(data);
                setLoading(true);
            });
    }, []);

    if(!isLoading) return <p>Loading...</p>
    
    return (
        <img src={dogData.message} alt={"A Random Dog"}></img>
    )
};

export default App;
