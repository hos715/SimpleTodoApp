export const setTask = (event) => {
   return async (dispatch) => {
      let data = event.target.value;
      if (data.trim() !== "" || data.trim() !== " ") {
         await dispatch({ type: "SET_TODO", payload: data });
      }
   };
};
export const clearTask = () => {
   return async (dispatch) => {
      await dispatch({type: 'SET_TODO', payload: ""})
   }
};
