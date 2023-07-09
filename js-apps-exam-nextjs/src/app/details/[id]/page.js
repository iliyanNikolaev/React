import React from 'react'

export default function details() {
    return (
        <div id="container">
            <div id="details">
                <div className="image-wrapper">
                    <img
                        src="/images/clothes.jpeg"
                        alt="Material Image"
                        className="post-image"
                    />
                </div>
                <div className="info">
                    <h2 className="title post-title">Clothes</h2>
                    <p className="post-description">
                        Description: We need warm winter clothes. The sizes are for children
                        from 2 to 14 years old. If possible, made from cotton materials, no
                        superficial ones.
                    </p>
                    <p className="post-address">Address: ul. Hristo Smirnenski 18, Sofia</p>
                    <p className="post-number">Phone number: 0888222345</p>
                    <p className="donate-Item">Donate Materials: 0</p>
                    {/*Edit and Delete are only for creator*/}
                    <div className="btns">
                        <a href="#" className="edit-btn btn">
                            Edit
                        </a>
                        <a href="#" className="delete-btn btn">
                            Delete
                        </a>
                        {/*Bonus - Only for logged-in users ( not authors )*/}
                        <a href="#" className="donate-btn btn">
                            Donate
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
