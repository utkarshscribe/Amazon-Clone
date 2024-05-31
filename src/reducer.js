export const initialState = {
    basket: [{
        id:'21345',
         title:'The Lean Startup: How Constant Innovation Creates Radically Successfully Buisenesses Paperback',
         price:115.205,
         rating:5,
         image:'https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
},{
id:'21345',
         title:'The Lean Startup: How Constant Innovation Creates Radically Successfully Buisenesses Paperback',
         price:115.205,
         rating:5,
         image:'https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
    
},],user: null,
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'Add-To-Basket':
            // logic for adding items to basket
            return { 
                ...state, 
                basket: [...state.basket, action.item]
            
            };
            
            case 'Remove-From-Basket':
                // logic for adding items to basket
                
                // we cloned the basket
                let newBasket = [...state.basket];

                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

                if (index >= 0) {
                    // item exists in basket, remove it...
                    newBasket.splice(index, 1);
                }
                else {
                    console.warn(
                        `Can't remove product (id: ${action.id}) as its not in basket`
                    );
                }


                return{ ...state, basket: newBasket };
            default:
                return state;    
    }
}

export default reducer;