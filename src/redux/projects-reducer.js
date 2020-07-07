const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PROJECTS = 'SET_PROJECTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PROJECTS_COUNT = 'SET_TOTAL_PROJECTS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  projects: [],
  pageSize: 20,
  totalProjectsCount: 0,
  currentPage: 1,
  isFetching: false,
}

const projectsReducer = (state = initialState, action) => {
   switch(action.type) {
      case FOLLOW:
         return {
            ...state,
            projects: state.projects.map(project => {
               if (project.id === action.projectId) {
                  return {...project, followed: true}
               }
               return project;
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            projects: state.projects.map(project => {
               if (project.id === action.projectId) {
                  return {...project, followed: false}
               }
               return project;
            })
         }

      case SET_PROJECTS:
         return {
            ...state,
            projects: action.projects,
         }

      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage,
         }

      case SET_TOTAL_PROJECTS_COUNT:
         return {
            ...state,
            totalProjectsCount: action.totalProjectsCount,
         }

      case TOGGLE_IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching,
         }

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

export default projectsReducer; 