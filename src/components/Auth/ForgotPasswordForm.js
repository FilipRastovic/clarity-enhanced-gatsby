import React, { useState } from "react";

const ForgotPasswordForm = () => {
	const [user, setUser] = useState({
		email: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({
			email: "",
		});
	};
	return (
		<div className="profile-authentication-area ptb-100">
			<div className="container">
				<div className="forgot-password-box">
					<p>
						Lost your password? Please enter your username or email
						address. You will receive a link to create a new
						password via email.
					</p>
					<form onSubmit={handleSubmit}>
						<label>
							Username or email
							<input
								type="text"
								className="form-control"
								value={user.email}
								onChange={(e) => setUser(e.target.value)}
							/>
						</label>
						<button type="submit" className="default-btn">
							Reset Password
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ForgotPasswordForm;
