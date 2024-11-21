import { useEffect, useState } from "react";
import api from "../../utils/api";
import { responseType, stepType } from "../Container";

interface BoxWarningProps {
  step: stepType;
  setStep: (Step: stepType) => void;
  response: responseType;
  setResponse: (response: responseType) => void;
}
export const BoxWarning = ({ response, setStep }: BoxWarningProps) => {
  const [id, setId] = useState<number>(0);
  const { token } = response;

  const getUserDados = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await api
      .get(`/cadastro/usuario/dados`, config)
      .then((response) => {
        setId(response.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await api
      .delete(`/financeiro/assinatura/cancelar/${id}`, config)
      .then(() => {
        return setStep({ BoxState: "DeletedUser" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserDados();
  }, []);

  return (
    <div className=" bg-warning-background rounded-xl p-4">
      <h1 className="font-bold text-secondary pb-4 text-xl ">
        Atenção, você está prestes a deletar sua conta.
      </h1>
      <h2 className="font-bold text-default-text text-base">
        Dados de cadastro
      </h2>
      <ul>
        <li className="list-disc ml-6 text-default-text text-sm">Email</li>
        <li className="list-disc ml-6 text-default-text text-sm">Senha</li>
      </ul>

      <h2 className=" font-bold text-default-text text-base">Histórico</h2>
      <ul>
        <li className="list-disc ml-6 text-default-text text-sm">
          Histórico de processos
        </li>
      </ul>

      <h2 className=" font-bold text-default-text text-base">
        Dados de pagamento
      </h2>
      <ul>
        <li className="list-disc ml-6 text-sm text-default-text">
          Cartões cadastrados na plataforma
        </li>
      </ul>
      <button
        onClick={deleteUser}
        className="bg-secondary text-white p-2 font-extrabold rounded-full w-full h-14 mt-8
         hover:bg-secondary-hover"
      >
        Apagar dados
      </button>
    </div>
  );
};
