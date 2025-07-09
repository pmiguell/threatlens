import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./VerifyCode.module.css";

export default function VerifyCode() {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("emailForVerification");
    if (!storedEmail) {
      navigate("/register");
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://192.168.15.2:8080/auth/verify", {
        email,
        code,
      });

      localStorage.removeItem("emailForVerification");
      navigate("/login");
    } catch (err) {
      alert("Código inválido ou expirado");
    }
  };

  return (
    <div className={style.verifyCodeContainer}>
      <h1>
        Threat<span className={style.highlight}>Lens</span>
      </h1>
      <p>We've sent a verification code to your email</p>
      <p>Enter the code in the field below</p>
      <form onSubmit={handleSubmit} className={style.verifyForm}>
        <input
          type="text"
          placeholder="Verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <input type="submit" value="Verify" />
      </form>
    </div>
  );
}
