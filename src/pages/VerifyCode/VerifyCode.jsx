import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./VerifyCode.module.css";

const OTP_LENGTH = 6;

export default function VerifyCode() {
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(""));
  const [email, setEmail] = useState("");
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("emailForVerification");
    if (!storedEmail) {
      navigate("/register");
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);

  function handleChange(index, value) {
    const char = value.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[index] = char;
    setDigits(next);
    if (char && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1].focus();
    }
  }

  function handleKeyDown(index, e) {
    if (e.key === "Backspace") {
      if (digits[index]) {
        const next = [...digits];
        next[index] = "";
        setDigits(next);
      } else if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  }

  function handlePaste(e) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    const next = Array(OTP_LENGTH).fill("");
    pasted.split("").forEach((char, i) => { next[i] = char; });
    setDigits(next);
    const focusIndex = Math.min(pasted.length, OTP_LENGTH - 1);
    inputsRef.current[focusIndex].focus();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = digits.join("");
    if (code.length < OTP_LENGTH) return;

    try {
      await axios.post("http://192.168.15.2:8080/auth/verify", { email, code });
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
      <p>Enviamos um código de verificação para o seu e-mail</p>
      <p>Digite o código abaixo</p>
      <form onSubmit={handleSubmit} className={style.verifyForm}>
        <div className={style.otpContainer}>
          {digits.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              className={style.otpInput}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onPaste={handlePaste}
              autoFocus={i === 0}
            />
          ))}
        </div>
        <input type="submit" value="Verificar" />
      </form>
    </div>
  );
}
