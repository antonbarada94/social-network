const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PROJECTS = 'SET_PROJECTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PROJECTS_COUNT = 'SET_TOTAL_PROJECTS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
   userDescription: {id: 1, name: 'Anton Sergushkin', specialization: 'Developer', location: "Minsk"}
}

const backgroundReducer = (state = initialState, action) => {
   switch(action.type) {
      default:
         return state;
   }
}

export const followActionCreator = (projectId) => ({type: FOLLOW, projectId});
export const unfollowActionCreator = (projectId) => ({type: UNFOLLOW, projectId});
export const setProjectsActionCreator = (projects) => ({type: SET_PROJECTS, projects});
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalProjectsCountActionCreator = (totalProjectsCount) => ({type: SET_TOTAL_PROJECTS_COUNT, totalProjectsCount});
export const toggleIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default backgroundReducer; 