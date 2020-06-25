const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PROJECTS = 'SET_PROJECTS';

let initialState = {
  projects: [],
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
            projects: [...state.projects, ...action.projects],
         }

      default:
         return state;
   }
}

export const followActionCreator = (projectId) => ({type: FOLLOW, projectId});
export const unfollowActionCreator = (projectId) => ({type: UNFOLLOW, projectId});
export const setProjectsActionCreator = (projects) => ({type: SET_PROJECTS, projects});

export default projectsReducer; 