const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PROJECTS = 'SET_PROJECTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PROJECTS_COUNT = 'SET_TOTAL_PROJECTS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOW_IN_PROGRESS = 'TOGGLE_IS_FOLLOW_IN_PROGRESS';

let initialState = {
   projects: [],
   pageSize: 20,
   totalProjectsCount: 0,
   currentPage: 1,
   isFetching: false,
   followInProgress: [],
}

const projectsReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            projects: state.projects.map(project => {
               if (project.id === action.projectId) {
                  return { ...project, followed: true }
               }
               return project;
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            projects: state.projects.map(project => {
               if (project.id === action.projectId) {
                  return { ...project, followed: false }
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

      case TOGGLE_IS_FOLLOW_IN_PROGRESS:
         return {
            ...state,
            followInProgress: action.followInProgress 
            ? [...state.followInProgress,action.userId] 
            : state.followInProgress.filter(id => id != action.userId)
         }

      default:
         return state;
   }
}

export const follow = (projectId) => ({ type: FOLLOW, projectId });
export const unfollow = (projectId) => ({ type: UNFOLLOW, projectId });
export const setProjects = (projects) => ({ type: SET_PROJECTS, projects });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalProjectsCount = (totalProjectsCount) => ({ type: SET_TOTAL_PROJECTS_COUNT, totalProjectsCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowInProgress = (followInProgress, userId) => ({ type: TOGGLE_IS_FOLLOW_IN_PROGRESS, followInProgress, userId });

export default projectsReducer; 