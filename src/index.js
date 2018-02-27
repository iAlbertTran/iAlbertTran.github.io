import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import me from './img/me.png';
import weatherApp from './img/weatherApp.png';
import checkers from './img/checkers.png';

//global variables for application-wide use
let aboutStartPos;
let knowledgeStartPos;
let portfolioStartPos;
let contactStartPos;
let windowPosition;
let currentSection;
let homeEndPos;
let navHeight;
let mobile;
let nav;

class Title extends React.Component{
	render(){
		let title = this.props.id;
		title += "Title";
		let color = {color: this.props.color};
		return(
			<div id={title}><span style={color}>&lt;</span>{this.props.title}<span style={color}>/&gt;</span></div>
		);
	}
}

class TitleBox extends React.Component{
	render(){
		let titleBox = this.props.id;
		titleBox += "TitleBox";

		return(
			<div id={titleBox}>
				<Title id={this.props.id} title={this.props.title.toUpperCase()} color={this.props.color}/>
			</div>
		);
	}
}
class TitleContainer extends React.Component{

	render(){
		let title = this.props.id;
		title += "TitleContainer";

		return(
			<div id={title}>
				<TitleBox id={this.props.id} title={this.props.title} color={this.props.color}/>
			</div>
		);
	}
}


class Content extends React.Component{
	render(){
		let contentContainer = this.props.id + "ContentContainer";

		let content;
		switch (this.props.id){
			case "about":
				content = (
					<div id={contentContainer}>
						<div id="photoContainer">
		                	<img id="me" src={me} alt="me"/>
		            	</div>
		            	<div id="aboutTxtContainer">
		                	<p id="aboutMeTxt">
			                    Hello World! My name is Albert and I'm a 22 year old web developer based in the Bay Area! I'm a recent college graduate from the University of California, Davis with a Bachelor's of Science in Computer Science.<br/><br/>
			                    Regardless if its a static web page or a dynamic web application, I love the process of taking a website from an idea all the way up to deployment. Being able to create something that's visually and functionally 
			                    beautiful is what motivates and excites me most about web development. It is my passion more so than my profession!<br/><br/>

			                    My interests include Software Development and UI / UX Design. I enjoy playing video games, watching basketball and movies, as well as just hanging out and socializing!<br/><br/>

			                    I'm always looking to better myself. If you'd like to learn more about what I can offer, continue on!<br/><br/>
			                    <em id="quote">"Tell me and I forget, teach me and I may remember, involve me and I learn"<br/></em>
			                    <em id="author">- Benjamin Franklin</em>
		                	</p>
	            		</div>
	            	</div>
				);
				break;
			case "knowledge":
				content = (
					<div id={contentContainer}>
						<div id="opentext">
							<p>There are countless programming languages and technologies available in the tech industry. Each person is unique in respect to what tools they have under their belt. For me, I find it extremely
							satisfying to discover something new that I can add to my arsenal. Click any
							<span style={{color: "#b19cd9"}}> <i className="fas fa-cog"></i></span> below to learn more about my skillset!</p>
						</div>

			            <div className="drop" id="currentContainer" onClick={() => this.props.onClick("current")}>
			            	<a id="currentCog"><i className="fas fa-cog"></i></a>
			                <a className="text">Present Skills</a>
			            </div>

			            <div className="drop" id="inProgressContainer" onClick={() => this.props.onClick("inProgress")}>
			            	<a id="inProgressCog"><i className="fas fa-cog"></i></a>
			                <a className="text">Working On Now</a>
			            </div>

			            <div className="drop" id="nextContainer" onClick={() => this.props.onClick("next")}>
			            	<a id="nextCog"><i className="fas fa-cog"></i></a>
			                <a className="text">Future Plans</a>
			            </div>

			            <div id="dropdown">
				            <div id="current">
			                    <i className="devicon-html5-plain-wordmark colored"></i>
			                    <i className="devicon-css3-plain-wordmark colored"></i>
			                    <i className="devicon-javascript-plain colored"></i>
			                    <i className="devicon-postgresql-plain-wordmark colored"></i>
			                    <i className="devicon-python-plain-wordmark colored"></i>
			                    <p>As a web developer, It's only natural that I work with 
			                    <span style={{color: "#E54D26"}}> HTML</span>, 
			                    <span style={{color: "#3D8FC6"}}> CSS</span>, and 
			                    <span style={{color: "#cccc00"}}> Javascript</span>. All of my past and current projects run using these three things. 
			                    Thus, I believe myself to have a deep understanding of them and how they can be used to create a website, or web application. <br/><br/>
			                    <span style={{color: "#336791"}}> SQL</span>, 
			                    <span style={{color: "#336791"}}> PostgreSQL</span>, and 
			                    <span style={{color: "#cccc00"}}> Python</span> is something 
			                    I've worked with on a school project, where we implemented and 
			                    queried a mock database of a school containing information about students and classes. I believe to have the skillset and understanding of how database systems and relational 
			                    database management systems work, and the ways to interact with them. </p>
			                </div>

				            <div id="inProgress">
			                    <i className="devicon-react-original-wordmark colored"></i>
			                    <p>Most of my experience with javascript has been limited to vanilla javascript. I have not spent much time working with any frameworks that are rising in popularity lately.
			                    So, I've taken it upon myself to begin learning some, starting with <span style={{color: "#61DAFB"}}> ReactJS</span>, a front-end framework. In fact, this webpage uses React by building components and rendering them to the user, like each section!
			                    <br/><br/>While confusing at first, my abilities to research, troubleshoot, and go through documentation has been extremely helpful in learning the ins and outs of React. As time goes on, I plan to 
			                    build more complex applications with it!</p>
			                </div>

				            <div id="next">
			                    <i className="devicon-nodejs-plain-wordmark colored"></i>
			                    <i className="devicon-mysql-plain-wordmark colored"></i>
			                    <p>As a software developer, the learning never stops! There's always something new being released, or some technique I haven't had the opportunity to explore just yet. However, it's my intention to 
			                    eventually get to as many of them as I can! As of now, I intend to fiddle with 
			                    <span style={{color: "#83CD29"}}> NodeJS</span> and 
			                    <span style={{color: "#06658D"}}> MySQL</span> so I can build the back-end of projects, leading to a fully functioning application!<br/><br/>
			                     I do have some 
			                    experience with NodeJS building a ReST API, using it in an application that allows users to upload images and having it generate labels through Google's Cloud Computing Vison API. While it's been awhile since then, I have 
			                    confidence that I'll be able to pick up right where I left off seamlessly!</p>
			                </div>
			            </div>
			       	</div>
			    );
				break;
			case "portfolio":
				content = (
					<div id={contentContainer}>
						<div id="weatherInfo">
							<p id="weatherTitle">Weather App</p>
							<i className="fas fa-sun"></i>
							<p id="weatherText">A web application that presents the user a 10-day forecast, along with additional information of the current day. The days are presented through a
							carousel where users can cycle through using the available buttons. The number of days that is shown at any single time depends on how large the user view is (1 up to 10). 
							Uses Yahoo's weather API for weather information. Coded in HTML/CSS and Vanilla JavaScript</p>
							<a id="weatherButton" href="https://ialberttran.github.io/weather-app/" target="_blank" rel="noopener noreferrer">View <i className="fa-fw fas fa-arrow-right"></i></a>
						</div>
		                <img id="weatherApp" alt="weatherApp" src={weatherApp}/>
		                <img id="checkers" alt="checkers" src ={checkers}/>
		                <div id="checkersInfo">
							<p id="checkersTitle">Classic Checkers</p>
							<i className="fas fa-chess-queen"></i>
							<p id="checkersText">A simple game of checkers for the bored and the distracted! Presents the user a standard 8 x 8 board two human players can use to duel one another in a game of
							mental war! As each move is made, the move history list grows to keep track of each move incase you want to go back in time
							and take back an ill-made move. Uses HTML / CSS and JavaScript. In addition, uses the ReactJS framework for rendering the board and move history, and keeping track of the board state at a given point in time!
							</p>
							<a id="checkersButton" href="https://ialberttran.github.io/weather-app/" target="_blank" rel="noopener noreferrer">View<i className="fa-fw fas fa-arrow-circle-right"></i></a>
						</div>
			       	</div>
			    );
				break;
			case "contact":
				content = (
					<div id={contentContainer}>
			            <form method="POST" action="https://formspree.io/albtran@ucdavis.edu" target="_blank">
			                <div id="email">
			                    <i className="fa fa-envelope"></i>
			                    <p className="username">AlbTran@ucdavis.edu</p>
			                </div>
			                <input type="email" required name="email" placeholder="Email"/>
			                <textarea name="message" required placeholder="How can I help you?"></textarea>
			                <button type="submit">Send</button>
			            </form>
					</div>
				);
				break;

			default:
				content = (
					<div id={contentContainer}>
					</div>
				);
				break;
		}

			return content;
		}
}

class Section extends React.Component{
	
	render(){
		return(
			<div id={this.props.id} className={this.props.className}>

					<TitleContainer id={this.props.id} title={this.props.title} color={this.props.color}/>
					<Content id={this.props.id} onClick={this.props.onClick}/>

			</div>
		);
	}
}

class FrontCover extends React.Component{
	render(){
		return(
			<div id={this.props.id} className={this.props.className}>
		        <div id="frontCoverOverlay">
		            <div id="textContainer">
		                <p id="line1">Albert T. Tran</p>
		                <p id="line2">Web Developer</p>
		                <p id="line3">Bay Area, California</p>
		            </div>
		            <a href="#aboutMe" id="arrowContainer" onClick={() => this.props.onClick('about')} >

		                <i id="arrow" className="fa fa-angle-double-down animated infinite bounce"></i>

		            </a>

		        </div>
		    </div>
		);
	}
}

function FooterAnchor(props){
	return(
		<a href={props.href} target="_blank" rel="noopener noreferrer">
			<div id={props.id}>
				<i className={props.className}></i>
			</div>
		</a>
	);
}
class Footer extends React.Component{

	render(){
		return(

				<div id="connectionsContainer">

	                <FooterAnchor 
	                	href="https://www.linkedin.com/in/alberttran17/"
	                    id="linkedIn"
	                    className="fa-fw fab fa-linkedin"
	                />

	                <FooterAnchor 
	                	href="https://github.com/iAlbertTran"
	                    id="github"
	                    className="fa-fw fab fa-github"
	                />

	                <FooterAnchor 
	                	href="https://www.facebook.com/albert.tran.77"
	                    id="facebook"
	                    className="fa-fw fab fa-facebook-square"
	                />

	                <FooterAnchor 
	                	href="#"
	                    id="skype"
	                    className="fa-fw fab fa-skype"
	                />

	                <FooterAnchor 
	                	href="https://www.freecodecamp.org/ialberttran"
	                    id="fcc"
	                    className="fa-fw fab fa-free-code-camp"
	                />
			    </div>

		);
	}
}

function AnchorIcon(props){
	let classes = "fa-fw " + props.fontAwesome;
	return(
		<i className={classes}></i>
	);
}

function NavAnchor(props){
	let anchorClasses = "anchor " + props.specificAnchor;
	let href = "#" + props.specificAnchor;
	return (
		<a className={anchorClasses} href={href} onClick={props.onClick}>
			<AnchorIcon fontAwesome={props.fontAwesome} />
			{props.specificAnchor.toUpperCase()}
		</a>
	);
}

function NavBar(props){

	let navBar =(
				<div id="navBar">
				<NavAnchor 
	            	specificAnchor="home" 
	            	onClick={() => props.onClick('home')} 
	            	fontAwesome = "far fa-arrow-alt-circle-up"
	            />

	            <NavAnchor 
	            	specificAnchor="about" 
	            	onClick={() => props.onClick('about')} 
	            	fontAwesome = "far fa-address-card"
	            />

	            <NavAnchor 
	            	specificAnchor="knowledge" 
	            	onClick={() => props.onClick('knowledge')} 
	            	fontAwesome = "far fa-lightbulb"
            	/>

	            <NavAnchor 
	            	specificAnchor="portfolio" 
	            	onClick={() => props.onClick('portfolio')} 
	            	fontAwesome = "fas fa-cogs"
	            />

	            <NavAnchor 
	            	specificAnchor="contact" 
	            	onClick={() => props.onClick('contact')} 
	            	fontAwesome = "far fa-envelope"
	            />
			</div>
		);
	return navBar;

}

function MobileMenu(props){
	return(
		<div id={props.id}>
			<NavAnchor 
            	specificAnchor="home" 
            	onClick={() => props.onClick('home')} 
            	fontAwesome = "far fa-arrow-alt-circle-up"
            />

            <NavAnchor 
            	specificAnchor="about" 
            	onClick={() => props.onClick('about')} 
            	fontAwesome = "far fa-address-card"
            />

            <NavAnchor 
            	specificAnchor="knowledge" 
            	onClick={() => props.onClick('knowledge')} 
            	fontAwesome = "far fa-lightbulb"
            />

            <NavAnchor 
            	specificAnchor="portfolio" 
            	onClick={() => props.onClick('portfolio')} 
            	fontAwesome = "fas fa-cogs"
            />

            <NavAnchor 
            	specificAnchor="contact" 
            	onClick={() => props.onClick('contact')} 
            	fontAwesome = "far fa-envelope"
            />
		</div>
);
}

class Navigation extends React.Component{
	render(){

		return(
			<div id="navBarContainer">

		        <div id="aplusplus">A++</div>

		        <NavBar onClick={this.props.onClick}/>
		        <a id="hamburgerMenu" onClick={this.props.mobileMenu}>
		        	<i className="fa fa-bars"></i>
		        </a>
	    	</div>
		);
	}
}

class Site extends React.Component{

	handleClick(clickedLink){
		const splitHref = '#' + clickedLink;

		//gets the offset of splitHref to find how far from the top it is
		let pageSectionPosition = $(splitHref).offset().top;


		//used to consider when the 'about' nav button is clicked while its not fixed to the top of the page
		//accounts for that space it takes up on the page when the animation scrolls to about section
		if($(window).scrollTop() < homeEndPos){
			pageSectionPosition -= navHeight;
		}

		//animates the scrolling function by making the scrollTop of the body change over 1000ms
		$("html, body").animate({scrollTop: pageSectionPosition}, 500);
	}

	//expands and collapses mobile menu
	mobileMenu(){
		if(mobile.style.height === '' || mobile.style.height === '0px')
			mobile.style.height = "25%";

		else
			mobile.style.height = "0px";
		
	}

	//expands the list of skills on the portoflio section
	expand(target) {
	    //gets what was clicked minus "Container" to expand the content;
	    let content = document.getElementById(target);

	    let currentCog = document.getElementById("currentCog");
	    let inProgressCog = document.getElementById("inProgressCog");
	    let nextCog = document.getElementById("nextCog");

	    let otherContent;

	    let contentIcons;
	    let otherContentIcons
	    ;
	    let contentP;
	    let otherContentP;

	    $("#current > i, #inProgress > i, #next > i").removeClass("animated fadeInDown");
        $("#current > p, #inProgress > p, #next > p").removeClass("animated fadeInUp");
        $("#current > i, #inProgress > i, #next > i").removeClass("animated fadeOutUp");
        $("#current > p, #inProgress > p, #next > p").removeClass("animated fadeOutDown");


	    //switch case for window size (mobile or desktop). 
	    //If desktop, containers are to the right of anchors
	    //if mobile, containers are below anchors
	    switch(content.id){

	    	case "current":

	    		currentCog.style.animation = "roll 1s linear infinite";
        		inProgressCog.style.animation = "roll 1s linear";
        		nextCog.style.animation = "rollback 1s linear";


       			contentIcons = "#current > i" 
       			contentP = "#current > p";

       			otherContentIcons = "#next > i, #inProgress i";
       			otherContentP = "#next > p, #inProgress p";

       			otherContent = "#inProgress, #next";
	    		break; 

	    	case "inProgress":

	    		currentCog.style.animation = "rollback 1s linear";
        		inProgressCog.style.animation = "rollback 1s linear infinite";
        		nextCog.style.animation = "rollback 1s linear";

        		contentIcons = "#inProgress > i";
        		contentP = "#inProgress > p";

        		otherContentIcons = "#next > i, #current i";
       			otherContentP = "#next > p, #current p";

       			otherContent = "#current, #next";
        		break;

        	case "next":

        		currentCog.style.animation = "rollback 1s linear";
        		inProgressCog.style.animation = "roll 1s linear";
        		nextCog.style.animation = "roll 1s linear infinite";

        		contentIcons = "#next > i";
        		contentP = "#next > p";

        		otherContentIcons = "#current > i, #inProgress i";
       			otherContentP = "#current > p, #inProgress p";

       			otherContent = "#inProgress, #current";
        		break;

        	default:
        		break;

	    }

        if (content.style.display === "grid"){

        	$(contentIcons).addClass("animated fadeOutUp");
        	$(contentP).addClass("animated fadeOutDown");

        	setTimeout(function(){
        		$(content).css("display", "none");
        		$("#dropdown").css("width", "0px");
        	}, 500);

        	setTimeout(function(){
        		$("#dropdown").css("width", "100%");
        	}, 1000);

        	currentCog.style.animation = "roll 2.5s linear infinite";
        	inProgressCog.style.animation = "rollback 2.5s linear infinite";
        	nextCog.style.animation = "roll 2.5s linear infinite";

        }
        else{

        	$(otherContentIcons).addClass("animated fadeOutUp");
        	$(otherContentP).addClass("animated fadeOutDown");

        	setTimeout(function(){
        		$(otherContent).css("display", "none");
        		$("#dropdown").css("width", "0px");
        	}, 500);

        	setTimeout(function(){
        		$("#dropdown").css("width", "100%");
        	}, 1000);

        	setTimeout(function(){
        		$(content).css("display", "grid");
        		$(contentIcons).addClass("animated fadeInDown");
        		$(contentP).addClass("animated fadeInUp");
        	}, 1500);

        

      
 			
        }
    }



	render(){

		return(
			<div>
				<FrontCover id="home" className="section"
					onClick={(clickedLink) => this.handleClick(clickedLink)}
				/>
				<Navigation 
					onClick={(clickedLink) => this.handleClick(clickedLink)} 
					mobileMenu={() => this.mobileMenu()}
				/>
				<MobileMenu id="mobile-menu"
					onClick={(clickedLink) => this.handleClick(clickedLink)}
				/>
				<Section id="about" className="section" title="About" color="#f76c6c"/>
				<Section id="knowledge" className="section" title="knowledge" color="#b19cd9" onClick={(clickedLink) => this.expand(clickedLink)}	/>
				<Section id="portfolio" className="section" title="Portfolio" color="#81CDC9"/>
				<Section id="contact" className="section" title="Connect" color="#86c232"/>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<Site/>, document.getElementById('root'));


window.onload = (
	loadScrollResize,
	typingAnimation("portfolio"),
	typingAnimation("about"),
	typingAnimation("knowledge"),
	typingAnimation("contact"));


window.onscroll = loadScrollResize;
window.onresize = loadScrollResize;


//for window.onload onreize and onscroll
function loadScrollResize() {
	windowPosition = $(window).scrollTop();

	refreshValues()
	adjustNav();
	navBarColors();

	currentSection = highlightButton();
}

//gets new values available for the rest of the page to use
function refreshValues(){
	homeEndPos = document.getElementById("home").getBoundingClientRect().height;
	aboutStartPos = $('#about').offset().top;
	knowledgeStartPos = $('#knowledge').offset().top;
	portfolioStartPos = $('#portfolio').offset().top;
	contactStartPos = $('#contact').offset().top;
	navHeight = $("#navBarContainer").outerHeight();
}
//adjusts which nav-bar is displayed, as well as it's styling depending on what device is being used and what the user is viewing
function adjustNav(){
	nav = document.getElementById("navBarContainer");
	mobile = document.getElementById("mobile-menu");
	if($(window).scrollTop() >= homeEndPos){
		nav.style.position = "fixed";
		nav.style.top = 0;
		nav.style.padding = 0;
		mobile.style.position = "fixed";
		mobile.style.top = navHeight + "px";
	}
	else{
		nav.style.position = "static";
		nav.style.padding = "1% 0";
		mobile.style.position = "static";
		mobile.style.top = 0;
	}
}


//jquery code used to set the animations when hovering over anchors and logo in the navbar
function navBarHover(color){
		//mouseenter for hovering
		$("#navBar > a").mouseenter(function(){
			$(this).css("borderBottom", color + " solid");
		});

		//mouseleave for when no longer hovering
		$("#navBar > a").mouseleave(function(){
			$(this).css("borderBottom", "transparent solid");
		});
		$(currentSection).mouseleave(function(){
			$(this).css("borderBottom", color + " solid");
		});
}

//changes the appearance of the navBar depending on if user scrolled all the way up or down
//uses jquery to reduce code to two lines, rather than having to use a for loop on the anchors
function navBarColors(){
		$("#navBar > a, #mobile-menu > a").css("borderBottom", "transparent solid");
}


//highlights the button in the navbar that corresponds to the current section being viewed
//subtracts by sectionMidPoint so transition of highlights begin when atleast half of the next section is visible.
function highlightButton(){
	//gets the height of a section / 2, all sections are equal height
	var sectionMidPoint = document.getElementById("about").getBoundingClientRect().height / 2;
	switch(true){
		case (windowPosition >= 0 && windowPosition < aboutStartPos - sectionMidPoint):
			let home = document.getElementsByClassName("home")[0];
			home.style.borderBottom = "#f76c6c solid";
			$("#navBar a .fa-fw, #mobile-menu a .fa-fw").css("color","#f76c6c");
			$("#aplusplus").css("border", "#f76c6c solid");
			navBarHover("#f76c6c");
			return(".home");

		case (windowPosition >= aboutStartPos - sectionMidPoint && windowPosition < knowledgeStartPos - sectionMidPoint):
			let about = document.getElementsByClassName("about")[0];
			about.style.borderBottom = "#f76c6c solid";
			$("#navBar a .fa-fw, #mobile-menu a .fa-fw").css("color","#f76c6c");
			$("#aplusplus").css("border", "#f76c6c solid");
			navBarHover("#f76c6c");
			return(".about");

		case (windowPosition >= knowledgeStartPos - sectionMidPoint && windowPosition < portfolioStartPos - sectionMidPoint):
			let knowledge = document.getElementsByClassName("knowledge")[0];
			knowledge.style.borderBottom = "#b19cd9 solid";
			$("#navBar a .fa-fw, #mobile-menu a .fa-fw").css("color","#b19cd9");
			$("#aplusplus").css("border", "#b19cd9 solid");
			navBarHover("#b19cd9");
			return(".knowledge");

		case (windowPosition >= portfolioStartPos - sectionMidPoint && windowPosition < contactStartPos - sectionMidPoint):
			let portfolio = document.getElementsByClassName("portfolio")[0];
			portfolio.style.borderBottom = "#81CDC9 solid";
			$("#navBar a .fa-fw, #mobile-menu a .fa-fw").css("color","#81CDC9");
			$("#aplusplus").css("border", "#81CDC9 solid");
			navBarHover("#81CDC9");
			return(".portfolio");

		case (windowPosition >= contactStartPos - sectionMidPoint):
			let contact = document.getElementsByClassName("contact")[0];
			contact.style.borderBottom = "#86c232 solid";
			$("#navBar a .fa-fw, #mobile-menu a .fa-fw").css("color","#86c232");
			$("#aplusplus").css("border", "#86c232 solid");
			navBarHover("#86c232");
			return(".contact");

		default: break;

	}

}


//a animation for section titles to give the look of typing
function typingAnimation(section){
	//actual typing animation
	let sectionTitle = document.getElementById(section + "Title");
	let sectionTitleContainer = document.getElementById(section + "TitleContainer").style.borderBottom;
	sectionTitle.style.width = "100%";
	setInterval(function(){

		if(sectionTitle.style.width === "0px"){
			sectionTitle.style.width = "100%";
			sectionTitle.style.transitionDuration = "2s";
		}
		else{
			sectionTitle.style.width = "0px";
			sectionTitle.style.transitionDuration = "1s";
		}

	}, 3000);


	//code for the blinking cursor animation using the div border
	sectionTitle.style.borderRight = sectionTitleContainer;
	setInterval(function(){
		if(sectionTitle.style.borderRight === sectionTitleContainer)
			sectionTitle.style.borderRight = "solid transparent";
		else
			sectionTitle.style.borderRight = sectionTitleContainer;
	}, 500);
}
