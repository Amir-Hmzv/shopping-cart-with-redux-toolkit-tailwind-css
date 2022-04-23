 export const shorten = (word) => {
  const split =  word.split(' ')
  const splited = `${split[0]} ${split[1]}`

  return splited
}

export const  quantityCount = (state,id) => {
  const count =  state.selectedItems.findIndex(item => item.id === id)
  if(count === -1){
    return false
  }else{
   return state.selectedItems[count].quantity
  }
} 