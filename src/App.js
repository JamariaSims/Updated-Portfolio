import video1 from "./assets/videos/video1.mp4";
import Picture1 from "./assets/images/Picture1.jpg";
import Picture2 from "./assets/images/Picture2.jpg";
import Picture3 from "./assets/images/Picture3.jpg";
import Picture4 from "./assets/images/Picture4.jpg";
import Picture5 from "./assets/images/Picture4.jpg";
import email from "./assets/icons/email.svg";
import { useState } from "react";
import "./App.css";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	phoneNumber: "",
	message: "",
};
const validateEmail = (input) => {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
		return true;
	}
	alert("You have entered an invalid email address!");
	return false;
};
function App() {
	const [state, setState] = useState(initialState);
	const onInputChange = (event) => {
		const { name, value } = event.target;
		setState({ ...state, [name]: value });
	};
	const onInputSubmit = (event) => {
		event.preventDefault();
		console.log(state);
		validateEmail(state.email);
		setState(initialState);
	};
	return (
		<div className="App">
			<div>
				<div className="Navigation">
					<div className="NameHolder">
						<h1>jamaria</h1>
					</div>
					<div className="LinkContainer">
						<a href="/Home">Home</a>

						<a href="/About">About</a>

						<a href="/Projects">Projects</a>

						<a href="/Contact" className="Hire">
							Hire Me
						</a>
					</div>
				</div>
			</div>
			<body className="split-down container">
				<video autoPlay muted loop src={video1} />
				<div className="introduction container">
					<h2 className="container-title">Introduction</h2>
					<p>
						Hey there, I'm Jamaria! A full stack developer on a mission to
						change the world line by line. I like to refer coding as magic
						because with coding, anything is possible! Everyday I look for new
						ways to bring code into my environment. Coming up with new ways to
						solve daily challenges whenever it's possible.
					</p>
					<br />
					<p>
						Since I was a child, I have been fascinated with coding and have
						always wondered how the gears work in the video games I played. Over
						time, that mystery became clear and I had to learn more about it.
					</p>
				</div>
				<div className="split-down container">
					<h2 className="container-title">My Skills</h2>
					<div className="skills">
						<div>
							<p>HTML</p>
							<p>CSS</p>
							<p>Javascript</p>
							<p>React</p>
							<p>Python</p>
						</div>
						<div>
							<p>PostgresSQL</p>
							<p>C#</p>
							<p>Swift</p>
							<p>Flutter</p>
							<p>Node.js</p>
						</div>
						<div>
							<p>Express</p>
							<p>MySQL</p>
							<p>AWS</p>
							<p>Firebase</p>
							<p>Dart</p>
						</div>
					</div>
				</div>
				<div className="split-down workHistory container">
					<h2 className="container-title">Work History</h2>
					<div class="timeline">
						<div class="timeline-container right">
							<div class="content">
								<img className="jobPicture" src={Picture1}></img>

								<p className="text2">Lawson</p>
								<p className="text1">Forklift Operator</p>
								<p className="text1">2021-Current</p>
								<p className="text1">
									The job I have requires me to pick items and process them onto
									an assembly line using a computer program called Exacta.
								</p>
							</div>
						</div>
						<div class="timeline-container left">
							<div class="content">
								<img className="jobPicture" src={Picture2}></img>
								<p className="text2">PARLEY </p>
								<p className="text1">Intern</p>
								<p className="text1">2021-2022</p>
								<p className="text1">
									As an intern, I was required to help maintain the frontend and
									assist the backend team when needed.
								</p>
							</div>
						</div>
						<div class="timeline-container right">
							<div class="content">
								<img className="jobPicture" src={Picture3}></img>
								<p className="text2">LOOP MEDIA </p>
								<p className="text1">Intern</p>
								<p className="text1">2021-2022</p>
								<p className="text1">
									During my internship, I was required to help create the mobile
									version of the web application using Flutter and Dart.
								</p>
							</div>
						</div>
						<div class="timeline-container left">
							<div class="content">
								<img className="jobPicture" src={Picture4}></img>
								<p className="text2">Five Star Communications</p>
								<p className="text1">Cable Technician</p>
								<p className="text1">2016-2021</p>
								<p className="text1">
									I was responsible for providing new services to customers and
									helping them repair or change their existing services.
								</p>
							</div>
						</div>
						<div class="timeline-container right">
							<div class="content">
								<img className="jobPicture" src={Picture5}></img>
								<p className="text2">Ceva</p>
								<p className="text1">Forklift Operator</p>
								<p className="text1">2020-2021</p>
								<p className="text1">
									My job involved picking pallets with a rf scanner and bringing
									them to the assembly line.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="split-down contactForm container">
					<h2 className="container-title">Contact Me</h2>
					<p className="container-title-info">
						Any question or remarks? Just send me a message!
					</p>
					<div className="split-right container">
						<div className="split-down container left-info-container">
							<h2 className="container-body-title">Contact Information</h2>
							<br />
							<p className="container-body-info">
								Please fill out the form and I'll get back to you as soon as
								possible.
							</p>
							<br />
							<div className="email">
								<img className="emailIcon" src={email}></img>
								<p className="email">JamariaxSims@gmail.com</p>
							</div>
						</div>
						<form>
							<div className="form split-down">
								<div className="split-right">
									<label htmlFor="firstName">
										First name{" "}
										<input
											id="firstName"
											name="firstName"
											value={state.firstName}
											type={"text"}
											onChange={onInputChange}
										/>
									</label>
									<label htmlFor="lastName">
										Last name{" "}
										<input
											id="lastName"
											name="lastName"
											value={state.lastName}
											type={"text"}
											onChange={onInputChange}
										/>
									</label>
								</div>
								<div className="split-right">
									<label htmlFor="email">
										Email address{" "}
										<input
											id="email"
											name="email"
											value={state.email}
											type={"email"}
											onChange={onInputChange}
										/>
									</label>
									<label htmlFor="phoneNumber">
										Phone number{" "}
										<input
											id="phoneNumber"
											name="phoneNumber"
											value={state.phoneNumber}
											type={"number"}
											onChange={onInputChange}
										/>
									</label>
								</div>

								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									rows="5"
									cols="40"
									name="message"
									value={state.message}
									onChange={onInputChange}
								/>
								<button type="submit" onClick={onInputSubmit}>
									SEND
								</button>
							</div>
						</form>
					</div>
				</div>
			</body>
		</div>
	);
}

export default App;
