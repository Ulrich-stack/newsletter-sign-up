import React, { useEffect } from "react";
import { useState } from "react";
import "./app.css"
import EmailForm from "./components/EmailForm";
import SuccessPage from "./components/SuccessPage";

const App = () => {

    const [inputValue, setInputValue] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [inputIsValid, setInputIsValid] = useState(true);
    const [inputState, setInputState] = useState("");

    function handleChange(e){
        setInputValue(e.target.value);
        setInputState("");
    }

    function handleSubmit(e){
        e.preventDefault();
        // console.log(inputValue);
        const pattern = new RegExp("[a-zA-Z0-9._%+-]+@company\.com");
        const boolValid = pattern.test(inputValue);
        setInputIsValid(boolValid);

        if(boolValid)
            setIsSubmitted(true);
        console.log(boolValid);

        if(!boolValid)
            setInputState("error");
    }

    useEffect(()=>{
        console.log(inputState);
        }, [inputState])

    return (
        !isSubmitted ? <EmailForm onChange={e =>handleChange(e)} onSubmit={handleSubmit} isValid={inputIsValid} inputState={inputState}/> :<SuccessPage email={inputValue}/>
    )
}

export default App