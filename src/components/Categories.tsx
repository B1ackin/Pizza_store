import React, {SetStateAction, useState} from 'react'

type CategorieType = {
    item: string[]
    onClickItem: (name: string) => void
}


export const Categories = React.memo((props:CategorieType) => {

    const [activeItem, setActiveItem] = useState<SetStateAction<null | number>>(null)

    const onSelectItem = (index: SetStateAction<any>) => {
        setActiveItem(index)
        props.onClickItem(index)
    }

    return (

        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => {setActiveItem(null)}}>Все</li>
                {
                    props.item.map((name,index) =>
                        <li className={activeItem === index ? 'active' : ''}
                            onClick={() => onSelectItem(index)} key={index}>{name}</li>)
                }
            </ul>
        </div>
    )
})