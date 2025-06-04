export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const GET_PROFILE_BY_ID = "GET_PROFILE_BY_ID";
export const SET_MY_PROFILE_ERROR = "SET_MY_PROFILE_ERROR";

const token = import.meta.env.VITE_API_TOKEN;

//me
export const getMyProfileAction = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Errore nel recupero del profilo");
      }

      const data = await res.json();
      dispatch({ type: GET_MY_PROFILE, payload: data });
    } catch (error) {
      dispatch({ type: SET_MY_PROFILE_ERROR, payload: error.message });
    }
  };
};

//userId
export const getProfileByIdAction = (userId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Utente non trovato");
      }

      const data = await res.json();
      dispatch({ type: GET_PROFILE_BY_ID, payload: data });
    } catch (error) {
      dispatch({ type: SET_MY_PROFILE_ERROR, payload: error.message });
    }
  };
};
