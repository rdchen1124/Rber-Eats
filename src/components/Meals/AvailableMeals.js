import { MealsCard } from "../UI";
import MealItem from "./MealItem";
const AvailableMeals = (props) => {
  return (
    <session>
      <MealsCard>
        <MealItem id="m0001" name="meal_0001" img="img_0001" price="10" description="test_1" />
        <MealItem id="m0002" name="meal_0002" img="img_0002" price="20" description="test_2" />
        <MealItem id="m0003" name="meal_0003" img="img_0003" price="30" description="test_3" />
        <MealItem id="m0004" name="meal_0004" img="img_0004" price="40" description="test_4" />
        <MealItem id="m0005" name="meal_0005" img="img_0005" price="50" description="test_5" />
        <MealItem id="m0006" name="meal_0006" img="img_0006" price="60" description="test_6" />
      </MealsCard>
    </session>
  )
}
export default AvailableMeals;