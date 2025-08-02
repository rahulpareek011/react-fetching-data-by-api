import React, { useEffect, useState } from 'react'
import axios from "axios";

const Fetch = () => {
    const styles = {
        border: "2px solid black",
        padding: "20px",
        width: "73vh",
    }

    const newStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px"
    }
    
    const [data, setData] = useState("");

    const FetchingData = async () => {
        const result = await axios.get("https://dummyjson.com/products");
        console.log(result.data.products);
        setData(result.data.products);
    }

    useEffect(() => {
        FetchingData()
    }, [])


    return (
        <>
            <h1 style={{ margin: "auto", marginBottom: "20px" }}>Fetching Data</h1>
            <div style={newStyle}>
                {data && data.map((item) => (
                    <div style={styles}>
                        <img src={item.thumbnail} alt="" style={{ height: "200px" }} />
                        <h3 key={item.id}>{item.title}</h3>
                        <p>{item.description}</p>
                        <p><b>Price: $</b> {item.price}</p>
                        <p><b>Rating: </b> {item.rating}</p>
                        <p><b>Brand: </b> {item.brand}</p>
                    </div>
                ))}
            </div >
        </>
    )
}

export default Fetch
