export const cartInitialState: any[] = []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

interface CartAction {
  type: string;
  payload: any;
}

interface ClearCartAction {
  type: string;
  payload?: undefined;
}

const UPDATE_STATE_BY_ACTION: Record<string, ((state: any[], action: CartAction | ClearCartAction) => any[])> = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    const productInCartIndex = state.findIndex((item: any) => item.id === id)

    if (productInCartIndex >= 0) {
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
        ...state.slice(productInCartIndex + 1)
      ]

      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload,
        quantity: 1
      }
    ]

    return newState
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter((item: any) => item.id !== id)

    return newState
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    return []
  }
}

export const cartReducer = (state = cartInitialState, action: CartAction | ClearCartAction) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
