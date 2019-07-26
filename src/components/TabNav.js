import React from 'react'
import {  Link } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {

	return (
		<div className="tabs">
			<Link className="nav-btn" to="/">Home</Link>
			<Link className="nav-btn" to="/characters/">Characters</Link>
			<Link className="nav-btn" to="/locations/">Locations</Link>
			<Link className="nav-btn" to="/episodes/">Episodes</Link>
		</div>
	);
}