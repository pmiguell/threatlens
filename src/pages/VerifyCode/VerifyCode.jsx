import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./VerifyCode.module.css";
import { authService } from "../../services/auth/authService";
import { useAuth } from "../../context/AuthContext";
import {
  EMAIL_VERIFICATION_KEY,
  CODE_TYPE_KEY,
  CODE_TYPE_REGISTER,
  CODE_TYPE_RESET_PASSWORD,
  OTP_LENGTH,
} from "../../constants";
import { storage } from "../../utils";

export default function VerifyCode() {
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(""));
  const [email, setEmail] = useState("");
  const [codeType, setCodeType] = useState(CODE_TYPE_REGISTER);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const storedEmail = storage.get(EMAIL_VERIFICATION_KEY);
    const storedCodeType = storage.get(CODE_TYPE_KEY) ?? CODE_TYPE_REGISTER;
    if (!storedEmail) {
      navigate("/register");
    } else {
      setEmail(storedEmail);
      setCodeType(storedCodeType);
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

  const handleResend = async () => {
    setError("");
    setSuccessMsg("");
    try {
      if (codeType === CODE_TYPE_RESET_PASSWORD) {
        await authService.resendPasswordCode(email);
      } else {
        await authService.resendCode(email);
      }
      setDigits(Array(OTP_LENGTH).fill(""));
      setSuccessMsg("Novo código enviado para o seu e-mail.");
      inputsRef.current[0]?.focus();
    } catch {
      setError("Não foi possível reenviar o código.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = digits.join("");
    if (code.length < OTP_LENGTH) return;

    setError("");
    setSuccessMsg("");
    setLoading(true);
    try {
      const { data } = await authService.verify({ email, codeType, code });

      storage.remove(EMAIL_VERIFICATION_KEY);
      storage.remove(CODE_TYPE_KEY);

      if (codeType === CODE_TYPE_RESET_PASSWORD) {
        login(data);
        navigate("/reset-password", { replace: true });
      } else {
        login(data);
        navigate("/", { replace: true });
      }
    } catch (err) {
      setError(err.response?.data?.message ?? "Código inválido ou expirado.");
    } finally {
      setLoading(false);
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
        {error && <p className={style.errorMsg}>{error}</p>}
        {successMsg && <p className={style.successMsg}>{successMsg}</p>}
        <input type="submit" value={loading ? "Verificando..." : "Verificar"} disabled={loading} />
      </form>
      <button type="button" className={style.resendBtn} onClick={handleResend}>
        Reenviar código
      </button>
    </div>
  );
}
