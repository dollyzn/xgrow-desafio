import Image from "next/image";
import { Form } from "../components/form";

const styles = {
  mainDiv:
    "bg-zinc-900 bg-login-bg bg-cover bg-center bg-no-repeat flex justify-center items-center h-screen md:pb-40 2xl:pb-72 ",
  gridDiv:
    "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 md:divide-x divide-gray-700 text-white",
  colText: {
    div: "flex flex-col text-center md:text-right items-center md:items-end md:pt-16 font-poppins",
    info: "text-3xl md:text-5xl mt-6 md:mt-20",
    textGreen: "text-green-2 mt-3",
  },
  colForm: "md:ps-10 md:pt-20 h-96 md:h-128",
};

export default function Login() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.gridDiv}>
        <div className={styles.colText.div}>
          <Image
            src="/logo-xgrow.png"
            width={212}
            height={53}
            alt="Logo da XGROW"
          />
          <div className={styles.colText.info}>
            <div>Seja bem vindo à</div>
            <div className={styles.colText.textGreen}>Área do aluno</div>
          </div>
        </div>
        <div className={styles.colForm}>
          <Form />
        </div>
      </div>
    </div>
  );
}
