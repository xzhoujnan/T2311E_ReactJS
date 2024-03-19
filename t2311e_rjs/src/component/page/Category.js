import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";

function Category(props){
    const [weather,setWeather] = useState({});
    const [city,setCity] = useState("Hanoi");

    function getWeather(){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
        fetch(url).then(rs=>rs.json())
        .then(data=>{
            const x = {
                city : `${data.name}, ${data.sys.country}`,
                temp : data.main.temp,
                humd: data.main.humidity,
                press: data.main.pressure,
            }
            setWeather(x);
        })
    }

    useEffect(function(){
        getWeather();
    },[]);

    function handleInput(e){
        const v = e.target.value;
        setCity(v);
        if(e.keyCode == 13){
            getWeather();
        }
    }

    function searchWeather(e){
        if(e.keyCode == 13){
            getWeather();
        }
    }

    return (
    <>
        <Container>
            <input onChange={handleInput} onKeyUp={searchWeather} type="text" placeholder="Enter your city..."/>
            <h1>Input value : {city}</h1>
        </Container>
        <Container>
            <h1>{weather.city}</h1>
            <h2>Nhiet do : {weather.temp}<sup>o</sup></h2>
            <h3>Do am : {weather.humd}%</h3>
            <h4>Ap suat : {weather.press}</h4>
        </Container>
    </>    
    );
}
export default Category;
