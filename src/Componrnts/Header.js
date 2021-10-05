import React from "react";
import './header.scss'

export default function Header() {
    return (
            <div className="header_box">
                <div className="empty"/>
                <h1 className="h1">To Do List</h1>
                <form action="#" className="form">
                    <input type="search" placeholder="Search" className="search"/>
                    <input type="submit" className="submit" value=""/>
                </form>
            </div>
    )
}