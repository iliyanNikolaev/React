import Link from "next/link"
import "./TopicsList.css"
import React from 'react'

export default function TopicsList() {
    return (
        <div className="topics-list">

            <div className="topic-item">
                <div className="content-container">
                    <h1>Topic title</h1>
                    <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quo nemo velit minima molestias repudiandae cum molestiae provident a? Perspiciatis ea porro assumenda tempore qui reprehenderit tempora quaerat tenetur esse.</p>
                </div>

                <div className="icons">
                    <Link href="/editTopic/itemId"><i className="fas fa-edit"></i></Link>
                    <i className="fas fa-trash-alt"></i>
                </div>
            </div>
        </div>
    )
}
