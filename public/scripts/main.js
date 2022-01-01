class App {
	constructor() {

		//VARIABLES
		this.wrapperMenu = document.querySelector('.wrapper-menu');

		//SCREEN VIEW OBSERVER
		this.observer = new IntersectionObserver(function (entries) {
			if (entries[0].isIntersecting === true) {
				document.querySelectorAll('nav > ul > li > a').forEach((el) => {
					if (entries[0].target.dataset.section === el.dataset.section) {
						el.classList.add('active');
					} else {
						el.classList.remove('active');
					}
				});
			};
		}, { threshold: [0.8] });

		//TO BE CALLED FUNCTIONS ON START
		this.startListeners();
		this.startNavigationButtons();
		this.startObeservers();

		//OBJECT FROM Typed.js SCRIPT TO RUN TYPING ANIMATION
		new Typed(".typed", {
			strings: ["Professinal Tutor", "School Principal", "Numerologist"],
			typeSpeed: 50,
			backSpeed: 50,
			loop: true,
		});
	}
	//TOGGLES MENU BUTTON(FOR MOBILE PHONES)
	toggleMenu = () => {
		this.wrapperMenu.classList.toggle('open');
		document.querySelectorAll('nav > ul > li').forEach((el, i) => {
			el.classList.toggle(`appear-${i}`);
		})
		if (this.wrapperMenu.classList.contains('open') || window.pageYOffset >= 100) {
			document.querySelector('nav').style.background = 'var(--primary-light-color)';
		} else {
			document.querySelector('nav').style.background = 'transparent';
		}
	}

	//TRIGGERS NAVBAR BACKGROUND ON SCROLL
	triggerNavBarBackground = () => {
		if (window.pageYOffset >= 100) {
			document.querySelector('nav').style.background = 'var(--primary-light-color)';
		}
		else if (document.getElementById('check').checked === false) {
			document.querySelector('nav').style.background = 'transparent';
		}
	}

	//NAVIGATION BUTTONS
	startNavigationButtons = () => {
		document.querySelectorAll('nav > ul > li > a').forEach((el) => {
			el.addEventListener('click', (e) => {
				e.preventDefault();
				document.querySelector(`section[data-section="${el.dataset.section}"]`).scrollIntoView({
					behavior: 'smooth',
				});
				document.getElementById('check').checked = false;
				wrapperMenu.classList.remove('open');
			})
		})
		document.querySelectorAll('.navigation > a').forEach(el => {
			el.addEventListener('click', (e) => {
				e.preventDefault();
				document.querySelector(`section[data-section="${el.dataset.section}"]`).scrollIntoView({
					behavior: 'smooth',
				});
			})
		})
		document.querySelectorAll('.home-buttons > a').forEach(el => {
			el.addEventListener('click', (e) => {
				e.preventDefault();
				document.querySelector(`section[data-section="${el.dataset.section}"]`).scrollIntoView({
					behavior: 'smooth',
				});
			})
		})
	}

	//STARTS ALL THE LISTENERS
	startListeners = () => {
		this.wrapperMenu.addEventListener('click', this.toggleMenu);
		window.addEventListener('scroll', this.triggerNavBarBackground);
	}

	//STARTS OBSERVSERS
	startObeservers = () => {
		document.querySelectorAll('section').forEach((el) => {
			this.observer.observe(el);
		})
	}
}

//STARTS THE SCRIPT
const app = new App();



