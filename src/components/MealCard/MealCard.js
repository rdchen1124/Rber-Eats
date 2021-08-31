import { MealModal } from "../UI";
import { useDispatch } from "react-redux";
import { hideMenu } from "../../redux/reducers/cartReducer";

const MealCard = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideMenu());
  }
  return (
    <MealModal onClose={handleClose}>
      MealCard
    </MealModal>
  )
}
export default MealCard;