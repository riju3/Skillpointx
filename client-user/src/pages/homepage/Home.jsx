	import './Home.css';
	//import React from "react";
	import Header from "../../components/homepage/Header.jsx";
	import Footer from "../../components/homepage/Footer.jsx";

	function Home()
	{
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
										𝓣𝓱𝓸𝓾𝓾𝓼𝓪𝓷𝓭𝓼 𝓸𝓯 𝓣𝓸𝓹 𝓒𝓸𝓾𝓻𝓼𝓮𝓼 𝓐𝓽 𝓨𝓸𝓾𝓻 𝓕𝓲𝓷𝓰𝓮𝓻𝓽𝓲𝓹𝓼 — 𝓐𝓵𝓵 𝓲𝓷 𝓞𝓷𝓮 𝓟𝓸𝔀𝓮𝓻𝓯𝓾𝓵 𝓟𝓵𝓪𝓽𝓯𝓸𝓻𝓶. 𝓢𝓴𝓲𝓵𝓵𝓟𝓸𝓲𝓷𝓽𝓧 𝓲𝓼 𝓪 𝓬𝓾𝓽𝓽𝓲𝓷𝓰-𝓮𝓭𝓰𝓮 𝓮𝓭𝓾𝓬𝓪𝓽𝓲𝓸𝓷 𝓪𝓷𝓭 𝓽𝓮𝓬𝓱 𝓽𝓻𝓪𝓲𝓷𝓲𝓷𝓰 𝓲𝓷𝓼𝓽𝓲𝓽𝓾𝓽𝓮, 𝓬𝓸𝓶𝓶𝓲𝓽𝓽𝓮𝓭 𝓽𝓸 𝓼𝓱𝓪𝓹𝓲𝓷𝓰 𝓽𝓱𝓮 𝓷𝓮𝔁𝓽 𝓰𝓮𝓷𝓮𝓻𝓪𝓽𝓲𝓸𝓷 𝓸𝓯 𝓽𝓮𝓬𝓱 𝓵𝓮𝓪𝓭𝓮𝓻𝓼. 𝓦𝓲𝓽𝓱 𝔂𝓮𝓪𝓻𝓼 𝓸𝓯 𝓮𝔁𝓹𝓮𝓻𝓽𝓲𝓼𝓮 𝓪𝓷𝓭 𝓽𝓻𝓾𝓼𝓽, 𝓢𝓴𝓲𝓵𝓵𝓟𝓸𝓲𝓷𝓽𝓧 𝓱𝓪𝓼 𝓮𝓶𝓮𝓻𝓰𝓮𝓭 𝓪𝓼 𝓸𝓷𝓮 𝓸𝓯 𝓽𝓱𝓮 𝓶𝓸𝓼𝓽 𝓻𝓮𝓵𝓲𝓪𝓫𝓵𝓮 𝓪𝓷𝓭 𝓲𝓷𝓷𝓸𝓿𝓪𝓽𝓲𝓿𝓮 𝓲𝓽 𝓽𝓻𝓪𝓲𝓷𝓲𝓷𝓰 𝓱𝓾𝓫𝓼 𝓲𝓷 𝓘𝓷𝓭𝓲𝓪.
										𝓞𝓾𝓻 𝓬𝓸𝓾𝓻𝓼𝓮𝓼 𝓪𝓻𝓮 𝓭𝓮𝓼𝓲𝓰𝓷𝓮𝓭 𝓽𝓸 𝓮𝓶𝓹𝓸𝔀𝓮𝓻 𝓼𝓽𝓾𝓭𝓮𝓷𝓽𝓼, 𝔀𝓸𝓻𝓴𝓲𝓷𝓰 𝓹𝓻𝓸𝓯𝓮𝓼𝓼𝓲𝓸𝓷𝓪𝓵𝓼, 𝓪𝓷𝓭 𝓪𝓼𝓹𝓲𝓻𝓲𝓷𝓰 𝓭𝓮𝓼𝓲𝓰𝓷𝓮𝓻𝓼 𝔀𝓲𝓽𝓱 𝓽𝓱𝓮 𝓵𝓪𝓽𝓮𝓼𝓽 𝓽𝓮𝓬𝓱-𝓼𝓴𝓲𝓵𝓵𝓼. 𝓕𝓻𝓸𝓶 𝓕𝓾𝓵𝓵 𝓢𝓽𝓪𝓬𝓴 𝓦𝓮𝓫 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓶𝓮𝓷𝓽, 𝓜𝓔𝓡𝓝, 𝓙𝓪𝓿𝓪, 𝓟𝔂𝓽𝓱𝓸𝓷, 𝓐𝓘 & 𝓜𝓛 𝓽𝓸 𝓓𝓮𝓼𝓲𝓰𝓷, 𝓜𝓪𝓻𝓴𝓮𝓽𝓲𝓷𝓰, 𝓪𝓷𝓭 𝓮𝓶𝓮𝓻𝓰𝓲𝓷𝓰 𝓽𝓮𝓬𝓱, 𝓮𝓪𝓬𝓱 𝓹𝓻𝓸𝓰𝓻𝓪𝓶 𝓲𝓼 𝓬𝓻𝓪𝓯𝓽𝓮𝓭 𝓫𝔂 𝓲𝓷𝓭𝓾𝓼𝓽𝓻𝔂 𝓮𝔁𝓹𝓮𝓻𝓽𝓼 𝓽𝓸 𝓶𝓪𝓴𝓮 𝔂𝓸𝓾 𝓳𝓸𝓫-𝓻𝓮𝓪𝓭𝔂.
										𝓐𝓽 𝓢𝓴𝓲𝓵𝓵𝓟𝓸𝓲𝓷𝓽𝓧, 𝔀𝓮 𝓫𝓮𝓵𝓲𝓮𝓿𝓮 𝓲𝓷 𝓱𝓸𝓵𝓲𝓼𝓽𝓲𝓬 𝓵𝓮𝓪𝓻𝓷𝓲𝓷𝓰 — 𝓴𝓷𝓸𝔀𝓵𝓮𝓭𝓰𝓮, 𝓹𝓻𝓪𝓬𝓽𝓲𝓬𝓮, 𝓲𝓷𝓽𝓮𝓻𝓿𝓲𝓮𝔀 𝓼𝓴𝓲𝓵𝓵𝓼, 𝓪𝓷𝓭 𝓬𝓪𝓻𝓮𝓮𝓻 𝓰𝓾𝓲𝓭𝓪𝓷𝓬𝓮 — 𝓪𝓵𝓵 𝓾𝓷𝓭𝓮𝓻 𝓸𝓷𝓮 𝓹𝓵𝓪𝓽𝓯𝓸𝓻𝓶. 𝓞𝓾𝓻 𝓭𝓮𝓭𝓲𝓬𝓪𝓽𝓮𝓭 𝓽𝓮𝓪𝓶 𝓼𝓾𝓹𝓹𝓸𝓻𝓽𝓼 𝔂𝓸𝓾 𝓯𝓻𝓸𝓶 𝔃𝓮𝓻𝓸-𝓵𝓮𝓿𝓮𝓵 𝓽𝓸 𝓙𝓸𝓫-𝓡𝓮𝓪𝓭𝔂 𝓟𝓻𝓸𝓯𝓮𝓼𝓼𝓲𝓸𝓷𝓪𝓵.
										𝓞𝓾𝓻 𝓶𝓲𝓼𝓼𝓲𝓸𝓷 𝓲𝓼 𝓽𝓸 𝓮𝓷𝓻𝓲𝓬𝓱 𝓮𝓿𝓮𝓻𝔂 𝓵𝓮𝓪𝓻𝓷𝓮𝓻’𝓼 𝓳𝓸𝓾𝓻𝓷𝓮𝔂 𝔀𝓲𝓽𝓱 𝓺𝓾𝓪𝓵𝓲𝓽𝔂 𝓮𝓭𝓾𝓬𝓪𝓽𝓲𝓸𝓷, 𝓶𝓸𝓭𝓮𝓻𝓷 𝓽𝓮𝓬𝓱-𝓯𝓸𝓬𝓾𝓼𝓮𝓭 𝓬𝓾𝓻𝓻𝓲𝓬𝓾𝓵𝓪, 𝓪𝓷𝓭 𝓪 𝓵𝓮𝓪𝓻𝓷𝓲𝓷𝓰 𝓮𝔁𝓹𝓮𝓻𝓲𝓮𝓷𝓬𝓮 𝓽𝓱𝓪𝓽 𝓶𝓪𝓴𝓮𝓼 𝔂𝓸𝓾 𝓯𝓾𝓽𝓾𝓻𝓮-𝓻𝓮𝓪𝓭𝔂. 𝓦𝓲𝓽𝓱 𝓢𝓴𝓲𝓵𝓵𝓟𝓸𝓲𝓷𝓽𝓧, 𝔂𝓸𝓾 𝓭𝓸𝓷’𝓽 𝓳𝓾𝓼𝓽 𝓵𝓮𝓪𝓻𝓷 — 𝔂𝓸𝓾 𝓣𝓻𝓪𝓷𝓼𝓯𝓸𝓻𝓶 𝓨𝓸𝓾𝓻 𝓕𝓾𝓽𝓾𝓻𝓮.

								
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

		
							<div className="course-1">
								<img src="/images-homepage/java-banner.webp" alt="Java"/>

							</div>
		
							<div className="course-2">
								<img src="/images-homepage/KB-MERN-Featured.webp" alt="MERN"/>
							</div>

							<div className="course-3">
								<img src="/images-homepage/machine-learning-banner.webp" alt="ML"/>
							</div>

							<div className="course-4">
								<img src="/images-homepage/sql-banner.webp" alt="SQL"/>
							</div>
							
						</div>


						<div className="course-name">

								<div className="course-name-1">
									<h3>JAVA</h3>
								</div>

								<div className="course-name-2">
									<h3>MERN</h3>
								</div>

								<div className="course-name-3">
									<h3>PYTHON</h3>
								</div>

								<div className="course-name-4">
									<h3>SQL</h3>
								</div>
								
						</div>
						
					<br/>

					<div className="lastpart1">
					<h3>FAQs</h3>
					</div>

					<div className="lastpart2">
						<h5>
						Start Learning From World’s Pro Instructors — Groove’s intuitive shared inbox makes it easy for team members to organize, prioritize and collaborate. In this episode:
						</h5>
						
						<h6>What kind of courses do you offer?</h6>
						<p>
						We offer a wide range of courses in various subjects, from business and technology to art and personal development. You can browse our extensive catalog to find a course that interests you.
						</p>

						<h6>Who are your instructors?</h6>
						<p>
						Our instructors are industry experts and passionate educators with a wealth of knowledge and experience. You can learn more about their qualifications on their course profiles.
						</p>

						<h6>How much do your courses cost?</h6>
						<p>
						Course prices vary depending on the length, content, and instructor. We offer free trials and introductory courses in some cases. Check the individual course page for specific pricing information.
						</p>

						<h6>How does the online learning platform work?</h6>
						<p>
						Our platform is user-friendly and accessible on any device. You can enroll in courses, access learning materials, interact with instructors and classNamemates, and track your progress, all in one place.
						</p>
					</div>

					<br/>
					<br/>


			<Footer /> 	

			</>
			
		)
	}
	export default Home;