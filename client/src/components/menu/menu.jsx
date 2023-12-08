import styles from "../menu/menu.module.css";
import logo from "../../assets/logo.svg";
import carrinho from "../../assets/carrinho.svg";

const Menu = () => {
  return (
    <div className={styles.barraMenu}>
      <div>
        <img src={logo} alt="Logo da devSteam" width={"72"} />
          DevSteam
      </div>
      <input type="text"  placeholder="Buscar"/>
      <img src={carrinho} alt="icone de carrinha do compras" width={"46"} />
    </div>
  );
};

export default Menu;
