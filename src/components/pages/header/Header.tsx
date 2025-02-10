import { useState } from "react";
import homeIcon from "../../../images/home-icon.svg";
import Modal from "../../UI/modal/Modal";

export const Header = () => {
  const [activeCraeteButton, setActiveCreateButton] = useState<boolean>(false);
  return (
    <>
      <header className="header">
        <hr />
        <div className="header__nav-block">
          <img
            src={homeIcon}
            className="header-icon"
            alt="home"
            width={16}
            height={16}
          />
          &gt;
          <span>Проекты</span>
        </div>
        <button
          className="button header-button"
          onClick={() => setActiveCreateButton(true)}
        >
          Создать проект
        </button>
      </header>
      {activeCraeteButton && (
        <Modal
          content={"Данный функционал ещё не реализован."}
          setActive={setActiveCreateButton}
        />
      )}
    </>
  );
};
