import crossButton from '../../images/close-black-button.svg'

type ModalProps = {
  setActive: (active: boolean) => void;
  content:string;
};

const Modal = ({content, setActive }: ModalProps) => {

  const CloseFunction = () => {
    setActive(false);
  };

  return (
    <div className="cookies__alert cookies__alert-js container">
    <div className="cookies__alert-close-button-wrapper">
        <button className="cookies__alert-close-button cross-button-form" type="button" onClick={CloseFunction}>
            <img src={crossButton} alt="" loading="lazy" width={30} height={30}/>
        </button>
    </div>
    <div className="cookies__alert-inner">
        <div className="cookies__alert-left">
            <p>
              {content}
            </p>
        </div>
    </div>
</div>
  );
};

export default Modal;