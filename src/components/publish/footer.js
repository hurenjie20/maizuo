import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <ul>
                    <li>
                        <NavLink to="/home">
                            <i className="iconfont">&#xe679;</i>
                            <span>电影</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movie">
                            <i className="iconfont">&#xe61d;</i>
                            <span>影院</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my">
                            <i className="iconfont">&#xe64f;</i>
                            <span>我的</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}