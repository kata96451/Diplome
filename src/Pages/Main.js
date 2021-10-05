import React from "react";
import Header from "../Componrnts/Header";
import {Form} from "../Componrnts/Form/Form";
import {Notes} from "../Componrnts/Notes";
import './main.scss'

function Main() {
    const notes = new Array(3)
        .fill('')
        .map((_, i) => ({id: i, title: `Note ${i + 1}`}))

    return (
        <div className="background">
            <div className="container">
                <Header />
                <Form />
                <Notes notes={notes}/>
            </div>

        </div>
    );
}

export default Main;