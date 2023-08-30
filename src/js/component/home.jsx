import React from "react";
import PageNavbar from "./navbar";
import PageJumbotron from "./jumbotron";
import PageCardContainer from "./cardContainer";
import PageFooter from "./footer";

const Home = () => {
	return (
		<>
		<PageNavbar/>
		<PageJumbotron/>
		<PageCardContainer/>
		<PageFooter/>
		</>
	)
};

export default Home;


// return (
	// 	<div className="text-center">
	// 		<h1 className="text-center mt-5">Hello Rigo!</h1>
	// 		<p>
	// 			<img src={rigoImage} />
	// 		</p>
	// 		<a href="#" className="btn btn-success">
	// 			If you see this green button... bootstrap is working...
	// 		</a>
	// 		<p>
	// 			Made by{" "}
	// 			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
	// 			love!
	// 		</p>
	// 	</div>
	// );