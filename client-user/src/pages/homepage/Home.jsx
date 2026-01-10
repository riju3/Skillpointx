	import './Home.css';
	//import React from "react";
	import { useState } from "react";
	import Header from "../../components/homepage/Header.jsx";
	import Footer from "../../components/homepage/Footer.jsx";
	

	function Home()
	{
		
		const [showPopup, setShowPopup] = useState(false);
		const handleCourseClick = () => {
			setShowPopup(true);
		};

		const [faqOpen, setFaqOpen] = useState(false);

		

		return(
			<>
				<Header/>
					<div className="banner">

						<div className="left-banner">
							<img src="/images-homepage/our-students.jpg" alt="Our Students"/>
						</div>

						<div className="right-banner">
							<h3> █▓▒▒░░░ABOUT░░░▒▒▓█</h3>
							<br/>
							<br/>
							<marquee direction="up"scrollAmount={1} scrollDelay={20} behavior="scroll" >
								<p className="marquee-item">
									<strong>Thousands of Top Courses at Your Fingertips — All in One Powerful Platform</strong>
									</p>
									<p className="marquee-item">
										SkillPointX is a cutting-edge education and technology training platform dedicated
										to shaping the next generation of tech professionals. With years of expertise and
										trust, we have emerged as one of India’s most reliable and innovative IT training hubs.
									</p>
									<p className="marquee-item">
										Our courses are designed for students, working professionals, and aspiring creators
										who want to build real-world, job-ready skills. From Full Stack Web Development, MERN
										Stack, Java, Python, AI & Machine Learning to Design, Marketing, and emerging
										technologies — every program is crafted by industry experts.
									</p>
									<p className="marquee-item">
										At SkillPointX, we believe in holistic learning. We combine strong fundamentals,
										hands-on practice, interview preparation, and career guidance — all under one
										platform. Our dedicated mentors support learners from beginner level to job-ready
										professionals.
									</p>
									<p className="marquee-item">
										Our mission is to empower every learner with quality education, modern curricula,
										and a future-focused learning experience.
									</p>
									<p className="marquee-item">
										With SkillPointX, you don’t just learn — you transform your future.
									</p>
							</marquee>					
						</div>
							
						
					</div>
					<br/>
					<br/> 
					<br/>

					<div className="catagory-top">
						<h2>█▓▒▒░░░Top Category We Have░░░▒▒▓█</h2>
					</div>
					<br/>
					<br/>
		
							<div className="catagory-after-top">
								<p><u><i>Check out the most demanding categories right now</i></u></p>
							</div>
		
					<div className="catagory">

						<div className="cat-1">
							<h3>Development</h3>
						</div>

						<div className="cat-2">
							<h3>Business</h3>
						</div>

						<div className="cat-3">
							<h3>IT & Software</h3>
						</div>

						<div className="cat-4">
							<h3>Productivity</h3>
						</div>

						<div className="cat-5">
							<h3>Design</h3>
						</div>

						<div className="cat-6">
							<h3>Marketing</h3>
						</div>
						
						
					</div>
					<br/>
					<br/>


					<div className="second-banner">
		
						<div className="second-banner1">
							<img src="/images-homepage/wsus-img-2025-02-26-04-52-03-9788.webp" alt="Banner"/>
						</div>

						<div className="second-banner2">

							<div className="second-banner2-up">
								<h1>Get more about us...</h1>
							</div>

							<div className="second-banner2-down">
								<p>
									Turning Ideas into Reality through Innovation and Excellence, SkillPointX stands as a trusted name in IT software development and professional training. With a decade of experience, the institution continues to empower individuals and businesses with reliable digital solutions and advanced technical skills.
								</p>
							</div>

						</div>
					</div>
					<br/>
					<br/>


					<div className="available-courses">
					<h3>█▓▒▒░░░𝙰𝚅𝙰𝙸𝙻𝙰𝙱𝙻𝙴 𝙲𝙾𝚄𝚁𝚂𝙴𝚂░░░▒▒▓█</h3>
					</div>
					<br/>
					<br/>


						<div className="course">

		
							<div className="course-1"  onClick={handleCourseClick}>
								<img src="/images-homepage/java-banner.webp" alt="Java"/>

							</div>

							<div className="course-2" onClick={handleCourseClick}>
								<img src="/images-homepage/KB-MERN-Featured.webp" alt="MERN"/>
							</div>

							<div className="course-3" onClick={handleCourseClick}>
								<img src="/images-homepage/machine-learning-banner.webp" alt="ML"/>
							</div>

							<div className="course-4" onClick={handleCourseClick}>
								<img src="/images-homepage/sql-banner.webp" alt="SQL"/>
							</div>
							
						</div>


						{/* 🔹 COURSE DETAILS SECTION */}
<div className="course-details">

  <div className="course-card">
    <h3>Java Full Stack</h3>
    <p>Core Java, OOPs, JDBC, Spring Boot & Projects</p>
    <span>⏱ Duration: 6 Months</span>
    <span>🎓 Level: Beginner to Advanced</span>
  </div>

  <div className="course-card">
    <h3>MERN Stack</h3>
    <p>MongoDB, Express, React, Node with real projects</p>
    <span>⏱ Duration: 5 Months</span>
    <span>🎓 Level: Intermediate</span>
  </div>

  <div className="course-card">
    <h3>Python & ML</h3>
    <p>Python basics, Data Analysis, Machine Learning</p>
    <span>⏱ Duration: 4 Months</span>
    <span>🎓 Level: Beginner</span>
  </div>

  <div className="course-card">
    <h3>SQL & Database</h3>
    <p> SQL queries, joins, indexing, optimization,
    MySQL, PostgreSQL </p>
    <span>⏱ Duration: 2 Months</span>
    <span>🎓 Level: Beginner</span>
  </div>

</div>

						
					<br/>
					
					{/* popup code */}
					
					{showPopup && (
					<div className="popup-overlay">
						<div className="popup-box">
						<h2>Login Required</h2>
						<p>You have to login first to purchase the course.</p>

						<button onClick={() => setShowPopup(false)}>
							OK
						</button>
						</div>
					</div>
					)}
					<br/>
					<br/>
						<div className="lastpart1" onClick={() => setFaqOpen(!faqOpen)}>
						<h3>
							FAQs {faqOpen ? "▲" : "▼"}
						</h3>
						</div>

						
						<h5>
							Start Learning From World’s Pro Instructors — Groove’s intuitive shared inbox
							makes it easy for team members to organize, prioritize and collaborate.
						</h5>
							
							
							<div className={`lastpart2 ${faqOpen ? "open" : ""}`}>

								
						<h6>What kind of courses do you offer?</h6>
						<p>
							We offer a wide range of courses in various subjects, from business and
							technology to art and personal development.
						</p>

						<h6>Who are your instructors?</h6>
						<p>
							Our instructors are industry experts and passionate educators with a wealth
							of knowledge and experience.
						</p>

						<h6>How much do your courses cost?</h6>
						<p>
							Course prices vary depending on the length, content, and instructor.
						</p>

						<h6>How does the online learning platform work?</h6>
						<p>
							You can enroll in courses, access learning materials, interact with
							instructors and track your progress.
						</p>
						</div>


					<br/>
					<br/>


			<Footer /> 	

			</>
			
		)
	}
	export default Home;