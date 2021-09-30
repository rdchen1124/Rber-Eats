import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { MealsCard } from "../UI";
import MealItem from "./MealItem";
import DUMMY_MEALS from "../../DUMMY_MEALS";

const AvailableMeals = (props) => {
  const MealsList = DUMMY_MEALS;
  const countedItems = useSelector(store => store.cart.countedItems);
  const cartStore = useSelector(store => store.cart.cartStore);

  return (
    <section>
      <MealsCard>
        {MealsList.map(meal => {
          return  <MealItem
            key={meal.id}
            {...meal}
            numberInCart={(cartStore.id === props.id && meal.id in countedItems) ? countedItems[meal.id] : 0 }
          />
        })}
      </MealsCard>
    </section>
  )
}
export default AvailableMeals;