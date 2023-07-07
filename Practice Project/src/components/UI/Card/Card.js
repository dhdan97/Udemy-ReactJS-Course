import CardStyles from "./Card.module.css";

const Card = (props) => {
  return(
    <div className={`${CardStyles.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;