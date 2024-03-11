import { useContext, useState, createContext } from "react";

export const ItemContext = createContext(null);

export const ItemProvider = (({ children }) => {
    const [itemCounts, setItemCounts] = useState(0);
    const [itemsArray, setItemsArray] = useState([]);
    const [items, setItems] = useState();
    return (
        <ItemContext.Provider value={{
            itemCounts,
            setItemCounts,
            items,
            setItems,
            itemsArray,
            setItemsArray
        }}>
            {children}
        </ItemContext.Provider>
    )
})

