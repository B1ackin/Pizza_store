import {Categories} from "../components/Categories";
import {SortPopup} from "../components/SortPopup";
import React from "react";
import {PizzaBlock} from "../components/PizzaBlock";


export const HomePage = (props: any) => {
    console.log(props.items)
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={(name) => console.log(name)}
                    item={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup items={['популярности', 'цене', 'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    props.items.map((item: any) => <PizzaBlock
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        types={item.types}
                        sizes={item.sizes}
                    />)
                }
            </div>
        </div>
    )
}