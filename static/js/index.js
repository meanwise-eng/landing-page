const siteMain = document.querySelector('.site-main');
const landingScreen = siteMain.querySelector('.landing-screen');
const landingVideo = landingScreen.querySelector('.landing-screen__video');


function videoSound() {
	if (window.innerWidth >= 769) {
		landingVideo.currentTime = 0;
		landingVideo.muted = false;
	}else {
		landingVideo.muted = true;
	}
}

window.onresize = videoSound;