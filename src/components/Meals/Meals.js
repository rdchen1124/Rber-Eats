import { Fragment } from "react";
import MealsNav from "./MealsNav";
import AvailableMeals from "./AvailableMeals";
const Meals = ({id}) => {
  return (
    <Fragment>
      <MealsNav id={id} />
      <AvailableMeals id={id} />
    </Fragment>
  )
}
export default Meals;