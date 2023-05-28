import React, { useState } from "react";
import registerImg from "../../images/register.gif";

const Signup = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
		name: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({
			email: "",
			password: "",
			name: "",
		});
	};
	return (
		<div className="row align-items-center">
			<div className="col-lg-6 col-md-12">
				<div className="register-image text-center">
					<img src={registerImg} alt="register" />
				</div>
			</div>
			<div className="col-lg-6 col-md-12">
				<div className="register-form">
					<h2>Create an account</h2>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label>
								Username
								<input
									type="text"
									className="form-control"
									value={user.name}
									onChange={(e) => setUser(e.target.value)}
								/>
							</label>
						</div>
						<div className="form-group">
							<label>
								Email
								<input
									type="text"
									className="form-control"
									value={user.email}
									onChange={(e) => setUser(e.target.value)}
								/>
							</label>
						</div>
						<div className="form-group">
							<label>
								Password
								<input
									type="password"
									className="form-control"
									value={user.email}
									onChange={(e) => setUser(e.target.value)}
								/>
							</label>
						</div>

						<button type="submit" className="default-btn">
							Register Now
						</button>
						<p>
							The password should be at least eight characters
							long. To make it stronger, use upper and lower case
							letters, numbers, and symbols like ! " ? $ % ^ &amp;
							)
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
