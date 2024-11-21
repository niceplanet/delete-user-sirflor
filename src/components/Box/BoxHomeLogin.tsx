import { ChangeEvent, useEffect, useState } from "react";
import { responseType, stepType } from "../Container";
import api from "../../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BoxHomeLoginProps {
  step: stepType;
  setStep: (Step: stepType) => void;
  setResponse: (response: responseType) => void;
}

export const BoxHomeLogin = ({ setResponse, setStep }: BoxHomeLoginProps) => {
  const [password, setPassword] = useState<string>("");
  const [document, setDocument] = useState<string>("");
  const [isRequest, setIsRequest] = useState(false);
  const [userExist, setUserExist] = useState(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [documentFocused, setDocumentFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleDocumentChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    setDocument(value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = () => {
    setLoading(true);
    return setIsRequest(true);
  };
  const verifyUser = async () => {
    await api
      .post("/oauth/login", {
        username: document,
        password: password,
        client_id: "sirflor-front",
        client_secret: "sirflor-front",
        grant_type: "password",
      })
      .then((res) => {
        const newResponse = {
          id: res.data.usuario.id,
          token: res.data.token,
        };
        setResponse(newResponse);
        return setStep({ BoxState: "Warning" });
      })
      .catch((err) => {
        setIsRequest(false);
        setUserExist(false);
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    if (isRequest) {
      verifyUser();
    }
  }, [isRequest]);

  const isFormValid = () => {
    return password.trim() !== "" && document.trim(); // Verifica se o campo de senha não está vazio
  };

  return (
    <div className="border  rounded-xl p-8">
      <h2 className="text-2xl text-default-text font-semibold mb-5">
        Confirme suas credenciais
      </h2>
      <p className="text-sm ">
        Essa etapa é essencial para confirmar sua identidade e garantir a
        segurança do processo.
      </p>

      <form className="flex flex-col gap-4 mt-4">
        <div className="mb-4">
          <label htmlFor="cpf" className="text-sm">
            Endereço de e-mail
          </label>
          <div className="relative">
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={document}
              onChange={handleDocumentChange}
              onFocus={() => setDocumentFocused(true)}
              onBlur={() => setDocumentFocused(false)}
              className={`text-base xl:text-sm mt-1 p-2 w-full border-2 rounded-md
              focus:border-primary  outline-none ${
                documentFocused && "text-primary"
              }
              ${document != "" && "border-primary text-primary"}`}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="cpf" className="text-sm">
            Senha
          </label>
          <div className="relative">
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 "
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon
                icon={showPassword ? ["fad", "eye"] : ["fad", "eye-slash"]}
                color="#666666"
              />
            </div>

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              className={`text-base xl:text-sm mt-1 p-2 w-full border-2 rounded-md
              focus:border-primary  outline-none ${
                passwordFocused && "text-primary"
              }
              ${password != "" && "border-primary text-primary"}`}
            />
          </div>
        </div>
        {userExist == false && (
          <div className="bg-warning-background rounded-xl p-4">
            <p className="font-bold text-secondary">Credenciais inválidas!</p>
          </div>
        )}
        <button
          type="button"
          onClick={handleSubmit}
          className={`bg-primary text-white p-2 font-extrabold rounded-full
          w-full h-10 hover:bg-primary-hover
          ${!isFormValid() && "opacity-70 cursor-not-allowed"}`}
          disabled={!isFormValid()}
        >
          {loading ? (
            <FontAwesomeIcon icon={["fas", "spinner-third"]} spin />
          ) : (
            "Confirmar"
          )}
        </button>
      </form>
    </div>
  );
};
