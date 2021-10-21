import { useSelector } from "react-redux";
import { MealsCard } from "../UI";
import MealItem from "./MealItem";
const AvailableMeals = (props) => {
  const countedItems = useSelector(store => store.cart.countedItems);
  const cartStore = useSelector(store => store.cart.cartStore);
  const meals = useSelector(store => store.store.meals);
  return (
    <section>
      <MealsCard>
        {meals.map(meal => {
          return  <MealItem
            key={meal.id}
            {...meal}
            numberInCart={(cartStore.store_id === props.id && meal.meal_id in countedItems) ? countedItems[meal.meal_id] : 0 }
          />
        })}
      </MealsCard>
    </section>
  )
}
export default AvailableMeals;