import React from "react";
import "./SignUp.css";

export default function SignUp() {
  return (
    <div className="wrap">
      {/* LEFT PANEL */}
      <aside className="left">
        <div className="logo">
          <div className="brand">
            <span>better</span>
            <span>market</span>
          </div>
        </div>

        <h1 className="tagline">
          Say hello to global<br />
          food and beverage<br />
          producers and<br />
          suppliers, all in one<br />
          place
        </h1>
      </aside>

      {/* RIGHT PANEL */}
      <main className="right">
        <h2 className="title">
          Let’s get started<br />
          with a few simple steps
        </h2>

        <form
          className="form"
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="lbl">Email</label>
          <input
            className="txt"
            type="email"
            name="signup-email"
            autoComplete="off"
          />

          <label className="lbl">Full Name</label>
          <input
            className="txt"
            type="text"
            name="signup-name"
            autoComplete="off"
          />

          <label className="lbl">Password</label>
          <input
            className="txt"
            type="password"
            name="signup-password"
            autoComplete="new-password"
          />

          <button className="cta" type="submit">
            Sign up
          </button>
        </form>

        <p className="terms">
          By signing up, you agree to our{" "}
          <a href="#" onClick={(e) => e.preventDefault()}>
            Terms of Service
          </a>.
        </p>
        <p className="login">
          Already have an account?{" "} <span className="log">Log in</span>
          <a href="#" onClick={(e) => e.preventDefault()}>
            
           
          </a>
        </p>
      </main>
    </div>
  );
}
