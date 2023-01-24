export const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SKILL":
      return {
        ...state,
        skills: [...state.skills, action.payload],
      };
    case "REMOVE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((skill, idx) => idx !== action.payload),
      };
    case "CHANGE_EMPID":
      return {
        ...state,
        empID: action.payload,
      };
    case "CHANGE_PHNO":
      return {
        ...state,
        phonenumber: action.payload,
      };
    case "CHANGE_DOB":
      return {
        ...state,
        dob: action.payload,
      };
    case "SET_DETAILS":
      console.log(action.payload)
      return {
        ...state,
        ...action.payload,
      };
    case "ADD_EXPERIENCE":
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };
    case "REMOVE_EXPERIENCE":
      return {
        ...state,
        experiences: state.experiences.filter(
          (experience, idx) => idx !== action.payload
        ),
      };
    case "ADD_EDUCATIONAL_DETAILS":
      return {
        ...state,
        education: [...state.education, action.payload],
      };
    case "DELETE_EDUCATION":
      return {
        ...state,
        education: state.education.filter(
          (education, idx) => idx !== action.payload
        ),
      };
    case "SET_TSHIRT_SIZE":
      return {
        ...state,
        tshirtSize: action.payload,
      };
    case "SET_FOOD_PREFERENCE":
      return {
        ...state,
        food: action.payload,
      };
    case "ADD_SPORTS":
      return {
        ...state,
        sports: [...state.sports, action.payload],
      };
    case "REMOVE_SPORTS":
      return {
        ...state,
        sports: state.sports.filter((sport, idx) => idx !== action.payload),
      };
    case "ADD_INTEREST":
      return {
        ...state,
        interests: [...state.interests, action.payload],
      };
    case "REMOVE_INTEREST":
      return {
        ...state,
        interests: state.interests.filter(
          (interest, idx) => idx !== action.payload
        ),
      };

    default:
      return state;
  }
};
