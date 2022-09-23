import IPizzaItem from './IPizzaItem';

export default interface RootState {
    pizzaItems: IPizzaItem[] | null;
}
