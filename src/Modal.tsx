import { ReactNode, useCallback, useEffect } from "react";

type ModalProps = {
  active: boolean;
  children?: ReactNode;
  setActive: (active: boolean) => void;
};

const Modal = ({ active, setActive, children }: ModalProps) => {
  const escFunction = useCallback((event: KeyboardEvent) => {
    event.stopPropagation();
    if (event.key === "Escape") setActive(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const CloseFunction = () => {
    setActive(false);
  };

  return (
    <div className="cookies__alert cookies__alert-js container">
    <div className="cookies__alert-close-button-wrapper">
        <button className="cookies__alert-close-button cross-button-form" type="button" onClick={CloseFunction}>
            <img src="./images/icons/close-black-button.svg" alt="" loading="lazy" width="20" height="20"/>
        </button>
    </div>
    <div className="cookies__alert-inner">
        <div className="cookies__alert-left">
            <p>
                This website uses cookies to ensure you get the best experience on our website.
                They also allow us to analyze user behavior in order to constantly improve the website for you.
            </p>
        </div>
        <div className="cookies__alert-right">
            <div className="cookies__alert-right-container">
                <a className="cookies__alert-button-accept button__parent-white-background button" >
                    <span>Accept</span>
                </a>
                <a className="cookies__alert-button-decline button button-transparent" >
                    <span>Decline</span>
                </a>
            </div>
        </div>
    </div>
</div>
  );
};

export default Modal;