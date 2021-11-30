export const TasksReducer = (state=[],action) => {
   switch (action.type) {
      case 'ADD_TODO':
         return [...action.payload];
      case 'CHECK_TODO':
         return [...action.payload];
      case 'DELETE_TODO':
         return [...action.payload];
   
      default:
         return state
   }
}