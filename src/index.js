import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';

let frontCoverStartPos;
let aboutStartPos;
let portfolioStartPos;
let contactStartPos;
let windowPosition;
let currentSection;


class Title extends React.Component{
	render(){
		let title = this.props.id;
		title += "Title";

		return(
			<div id={title}>{this.props.id}</div>
		);
	}
}

class TitleBox extends React.Component{
	render(){
		let titleBox = this.props.id;
		titleBox += "TitleBox";

		return(
			<div id={titleBox}>
				<Title id={this.props.id}/>
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
				<TitleBox id={this.props.id}/>
			</div>
		);
	}
}
class Section extends React.Component{
	
	render(){
		return(
			<div id={this.props.id} className={this.props.className}>
				<TitleContainer id={this.props.id}/>
			</div>
		);
	}
}

class Navigation extends React.Component{
	render(){
		return(
			<div id="navBarContainer">

		        <div id="aplusplus">A++</div>

		        <i id="hamburgerMenu" className="fa fa-bars"></i>
		        <div id="navBar">

		            <a className="anchor top" href="#front" onClick={() => this.props.onClick('top')}>
		            	<i className="fa-fw far fa-arrow-alt-circle-up"></i>
		            	TOP
		            </a>

		            <a className="anchor about" href="#about" onClick={() => this.props.onClick('about')}>
		            	<i className="fa-fw far fa-address-card"></i>
		            	ABOUT
		            </a>

		            <a className="anchor portfolio" href="#portfolio" onClick={() => this.props.onClick('portfolio')}>
		            	<i className="fa-fw fas fa-cogs"></i>
		            	PORTFOLIO
		            </a>

		            <a className="anchor contact" href="#contact" onClick={() => this.props.onClick('contact')}>
		            	<i className="fa-fw far fa-envelope"></i>
		            	CONTACT
		            </a>

		        </div>
	    	</div>
		);
	}
}

class Site extends React.Component{

	handleClick(clickedLink){
		const splitHref = '#' + clickedLink;

		//gets the offset of splitHref to find how far from the top it is
		var pageSectionPosition = $(splitHref).offset().top;

		//animates the scrolling function by making the scrollTop of the body change over 1000ms
		$("html, body").animate({scrollTop: pageSectionPosition}, 1000);
	}

	render(){
		return(
			<div>
				<Navigation onClick={(clickedLink) => this.handleClick(clickedLink)}/>
				<Section id="about" className="section"/>
				<Section id="portfolio" className="section"/>
				<Section id="contact" className="section"/>
			</div>
		);
	}
}

ReactDOM.render(<Site/>, document.getElementById('root'));


window.onload = function(){
	var atTop = false;
	windowPosition = $(window).scrollTop();

	if(windowPosition == 0)
		atTop = true;
	navBarHover(atTop);
	navBarColors(atTop);
	typingAnimation("portfolio");
	typingAnimation("about");
	typingAnimation("contact");
	//adjustSectionTitle("about", 10);
	//adjustSectionTitle("portfolio", 10);
	//adjustSectionTitle("contact", 10);

	//frontCoverStartPos = $('#frontCover').offset().top;
	aboutStartPos = $('#about').offset().top;
	portfolioStartPos = $('#portfolio').offset().top;
	contactStartPos = $('#contact').offset().top;

    currentSection = highlightButton();


}

window.onscroll = function() {
	windowPosition = $(window).scrollTop();

	navBarColors(false);
	navBarHover(false);
	currentSection = highlightButton();
	//transparentBG(document.getElementById("aboutContentContainer"));
	//transparentBG(document.getElementById("aboutTitleContainer"));

	if($(window).scrollTop() === 0){
		navBarColors(true);
		navBarHover(true);
	}
}
/*
window.onresize = function () {
	adjustSectionTitle("about", 12);
	adjustSectionTitle("portfolio", 12);
	adjustSectionTitle("contact", 12);
}

//adjusts the size of the text to fit the title container, as well as the position
//takes in the section title and number of letters in the titlev to properly format it
function adjustSectionTitle(section, letters) {
    
	var sectionTitleContainer = document.getElementById(section + "TitleContainer");
	var sectionTitle = document.getElementById(section + "Title");
	sectionTitle.style.fontSize = sectionTitleContainer.clientWidth / letters + "px";

    //if mobile view, stops it from repositioning the container
    if (window.innerWidth <= 767)
        return;

	var sectionContentContainer = document.getElementById(section + "ContentContainer");
    sectionTitleContainer.style.top = sectionContentContainer.clientHeight / 20 + "px";
}
*/
//jquery code used to set the animations when hovering over anchors and logo in the navbar
function navBarHover(topOfPage){
	//when scrolled all the way to the top page
	if(topOfPage){
		//mouseenter for hovering
		$("#navBar > a, #aplusplus").mouseenter(function(){
			$(this).css("background", "#FF3b3F").css("color", "#F8F8F8");
		});

		//mouseleave for when no longer hovering
		$(".about, .portfolio, .contact, #aplusplus").mouseleave(function(){
			$(this).css("background", "#F8F8F8").css("color", "#282828");
		});
		$(".top").mouseleave(function(){
			$(this).css("background", "#FF3b3F").css("color", "#F8F8F8");
		});
	}
	else{
		var hoverAnimation = $("#navBar > a, #aplusplus").mouseenter(function(){
			$(this).css("background", "#FF3b3F").css("color", "#282828");
		});

		hoverAnimation.mouseleave(function(){
			$(this).css("background", "#282828").css("color", "#F8F8F8");
		});

		$(currentSection).mouseleave(function(){
			$(this).css("background", "#FF3b3F").css("color", "#282828");
		});


	}
}

//changes the appearance of the navBar depending on if user scrolled all the way up or down
//uses jquery to reduce code to two lines, rather than having to use a for loop on the anchors
function navBarColors(topOfPage){
	//when scrolled all the way to the top page
	if(topOfPage){

		$(".about, .portfolio, .contact, #navBarContainer, #aplusplus").css("backgroundColor", "#F8F8F8").css("color", "#282828");
		$("#aplusplus").css("borderColor", "#FF3b3F");

	}

	else{
		$("#navBar > a, #navBarContainer, #aplusplus").css("backgroundColor", "#282828").css("color", "#F8F8F8");
		$("#aplusplus").css("borderColor", "#FF3b3F");
	}

}


//highlights the button in the navbar that corresponds to the current section being viewed
//subtracts by sectionMidPoint so transition of highlights begin when atleast half of the next section is visible.
function highlightButton(){
	//gets the height of a section / 2, all sections are equal height
	var sectionMidPoint = document.getElementById("about").getBoundingClientRect().height / 2;
	switch(true){
		case(windowPosition === 0):
			let top = document.getElementsByClassName("top")[0];
			top.style.backgroundColor = "#FF3B3F";
			top.style.color = "#F8F8F8";
			return(".top");

		case (windowPosition > 0 && windowPosition < aboutStartPos - sectionMidPoint):
			top = document.getElementsByClassName("top")[0];
			top.style.backgroundColor = "#FF3B3F";
			top.style.color = "#282828";
			return(".top");

		case (windowPosition >= aboutStartPos - sectionMidPoint && windowPosition < portfolioStartPos - sectionMidPoint):
			let about = document.getElementsByClassName("about")[0];
			about.style.backgroundColor = "#FF3B3F";
			about.style.color = "#282828";
			return(".about");

		case (windowPosition >= portfolioStartPos - sectionMidPoint && windowPosition < contactStartPos - sectionMidPoint):
			let portfolio = document.getElementsByClassName("portfolio")[0];
			portfolio.style.backgroundColor = "#FF3B3F";
			portfolio.style.color = "#282828";
			return(".portfolio");

		case (windowPosition >= contactStartPos - sectionMidPoint):
			let contact = document.getElementsByClassName("contact")[0];
			contact.style.backgroundColor = "#FF3b3F";
			contact.style.color = "#282828";
			return(".contact");

	}

}

//makes the about section text box transparent when scrolling, then solid when not, fun little style change
function transparentBG(element){
	element.style.background = "rgba(40, 40, 40, 0.25)";
	setTimeout(function(){
		element.style.background = "rgba(40, 40, 40, 1)"
	}, 500);
}


//a animation for section titles to give the look of typing
function typingAnimation(section){
	//actual typing animation
	var sectionTitle = document.getElementById(section + "Title");
	sectionTitle.style.width = "100%";
	setInterval(function(){

		if(sectionTitle.style.width == "0px"){
			sectionTitle.style.width = "100%";
			sectionTitle.style.transitionDuration = "2.5s";
		}
		else{
			sectionTitle.style.width = "0px";
			sectionTitle.style.transitionDuration = "1s";
		}

	}, 3500);


	//code for the blinking cursor animation using the div border
	sectionTitle.style.borderRight = "solid rgba(255, 59, 63)";
	setInterval(function(){
		if(sectionTitle.style.borderRight === "solid rgb(255, 59, 63)")
			sectionTitle.style.borderRight = "solid transparent";
		else
			sectionTitle.style.borderRight = "solid rgb(255, 59, 63)";
	}, 500);
}

//expands the list of skills on the portoflio section
/*function expand(target) {
    //gets what was clicked minus "Container" to expand the content;
    var clickedBox = target.split("C")[0];
    var content = document.getElementById(clickedBox);

    //switch case for window size (mobile or desktop). 
    //If desktop, containers are to the right of anchors
    //if mobile, containers are below anchors
    switch (true) {

        case (window.innerWidth > 767):
            if (content.style.width == "100%")
                content.style.width = "0px";
            else
                content.style.width = "100%";
            break;

        case (window.innerWidth <= 767):
            if (content.style.height == "100%") {
                content.style.height = "0px";
                content.style.display = "none";
            }
            else {
                content.style.height = "100%";
                content.style.display = "flex";
            }
            break;
    }

}*/
