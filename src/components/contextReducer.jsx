import React, { Children, createContext, useContext, useReducer } from 'react'

const CartStateContext= createContext();
const CartDispatchContext= createContext();


const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id, name:action.name, img:action.img, qty:action.qty, size:action.size, description:action.description, price:action.price}]
            case "REMOVE":
                let newArr = [...state]
                newArr.splice(action.index, 1)
                return newArr;
            case "DROP":
                let empArray = []
                return empArray
                case "UPDATE":
                    let arr = [...state];
                    let updatedFoodIndex = arr.findIndex((food) => food.id === action.id);
                
                    if (updatedFoodIndex !== -1) {
                        arr[updatedFoodIndex] = {
                            ...arr[updatedFoodIndex],
                            qty: parseInt(action.qty) + arr[updatedFoodIndex].qty,
                            price: action.price + arr[updatedFoodIndex].price
                        };
                    }
                
                    return arr;
                
        default:
            console.log("error in reducer")
    }
}

export const CartProvider= ({children})=>{
    const[state,dispatch]=useReducer(reducer,[])
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart=()=> useContext(CartStateContext);
export const useDispatchCart=()=> useContext(CartDispatchContext)
