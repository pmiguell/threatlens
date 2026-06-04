import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./ForgotPassword.module.css";
import { authService } from "../../services/auth/authService";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authService.forgotPassword({ email });
      localStorage.setItem("emailForVerification", email);
      localStorage.setItem("codeTypeForVerification", "RESET_PASSWORD");
      navigate("/verify");
    } catch (err) {
      setError(err.response?.data?.message ?? "Não foi possível enviar o código.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.container}>
      <h1>
        Threat<span className={style.highlight}>Lens</span>
      </h1>
      <p>Informe seu e-mail para receber o código de recuperação de senha.</p>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && <p className={style.errorMsg}>{error}</p>}
        <input type="submit" value={loading ? "Enviando..." : "Enviar código"} disabled={loading} />
      </form>
      <Link to="/login" className={style.backLink}>
        Voltar ao login
      </Link>
    </div>
  );
}
