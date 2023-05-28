import React, { useState } from "react";
import { Link } from "gatsby";
import loginImg from "../../images/login.gif";

const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({
			email: "",
			password: "",
			rememberMe: false,
		});
	};

	return (
		<div className="row align-items-center">
			<div className="col-lg-6 col-md-12">
				<div className="login-form">
					<h2>Sign into your account</h2>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label>
								Username or email
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
									value={user.password}
									onChange={(e) => setUser(e.target.value)}
								/>
							</label>
						</div>
						<div className="form-check">
							<label
								className="form-check-label"
								htmlFor="remember-me"
							>
								<input
									className="form-check-input"
									type="checkbox"
									value={user.rememberMe}
									onChange={(e) => setUser(e.target.value)}
									id="remember-me"
								/>
								Remember me
							</label>
						</div>
						<button type="submit" className="default-btn">
							Login Now
						</button>
						<Link
							to="/auth/forgot-password"
							className="forgot-password"
						>
							Forgot your password?
						</Link>
					</form>
				</div>
			</div>
			<div className="col-lg-6 col-md-12">
				<div className="login-image text-center">
					<img src={loginImg} alt="login" />
				</div>
			</div>
		</div>
	);
};

export default Login;
