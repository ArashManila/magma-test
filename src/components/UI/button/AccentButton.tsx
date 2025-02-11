
type ButtonProps = {children: React.ReactNode;onClick?: () => void;}

export const AccentButton = ({children,...props}:ButtonProps)=>{
  return(
    <button {...props} className="button header-button">
      {children}
    </button>
  );
}