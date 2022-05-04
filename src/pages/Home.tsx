import {Categories} from "../components/Categories";
import {SortPopup} from "../components/SortPopup";
import React, {useEffect} from "react";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filter";
import {fetchPizzas} from "../redux/actions/pizzas";
import LoadingBlock from "../components/PizzaBlock/LoadingBlock";


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const HomeItem = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'} ]

export const HomePage = () => {
    const items = useSelector(({ pizzas }: any) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }: any) => pizzas.isLoaded);
    const dispatch = useDispatch()

    const onSelectCategory = (index: any) => {
        dispatch(setCategory(index))
    }

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchPizzas())
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    item={categoryNames}/>
                <SortPopup items={HomeItem}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded && items.map((item: any) => <PizzaBlock
                        isLoaded={isLoaded}
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        types={item.types}
                        sizes={item.sizes}
                    />)
                }
                {Array(10).fill(<LoadingBlock/>)}
            </div>
        </div>
    )
}