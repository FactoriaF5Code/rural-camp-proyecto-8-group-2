import iconHome from '../../assets/icon_home.svg';
import "./Panel.css";

export const Panel = ({isSearching}) => {
  return (
  <>
  {!isSearching && (
    <div className="contenedoriconoLupa">
    <img className="iconoLupa" src ={iconHome} alt="logo" />
    </div>
  )}
  
  </>
  )
};
