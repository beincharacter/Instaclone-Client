import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainHeader } from "../../Header/Header";
import { FaUserCircle } from 'react-icons/fa'
import './mainPage.css';
const API = 'http://localhost:9000'

export function MainPage() {
    const navigate = useNavigate();
    const [postsData, setPostsData] = useState([]);
    console.log(postsData)

    useEffect(() => {
        fetch(`${API}/posts`,{
            method: 'GET',
            headers: {
                'authorization': localStorage.getItem('token')
            }
        })
            .then(res => {
                return res.json();
            }).then(data => {
                // console.log(data)
                console.log("in then");
                setPostsData(data.post);
            }).catch(e => {
                console.log("in catch");
                console.log(e);
            })
    }, [navigate])
    return (
        <>
        <div className="main-page-container">
            <MainHeader/>
            <div className="main-page-box">

                {postsData.map((data, i) => {
                    return (
                        <>
                        <div className="post-box">
                            <div className="post-header">
                                <div className="post-image cursor"><FaUserCircle size='1.7em' /></div>
                                <div className="user-details">
                                    <span className="user-name cursor">{data.user.name}</span>
                                    <span className="user-location">{data.user.city}, </span>
                                    <span className="user-location">{data.user.state}</span>
                                </div>
                                <div className="edit-delete">
                                    <span className="edit-delete-btn cursor">...</span>
                                </div>
                            </div>
                            <div className="image-box">{data.image}</div>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
        </>
    )
}