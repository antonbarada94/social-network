import * as axios from 'axios';

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      "API-KEY": "99e454ab-399c-4111-94c5-3cd3402b365b"
   },
})

export const projectsAPI = {
   getProjects(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data;
         });
   },
}

export const followAPI = {
   follow(id) {
      return instance.post(`follow/${id}`, {})
         .then(response => {
            return response.data;
         });
   },
   unfollow(id) {
      return instance.delete(`follow/${id}`)
         .then(response => {
            return response.data;
         });
   }
}

export const authMeAPI = {
   authMe() {
      return instance.get(`auth/me`)
         .then(response => {
            return response.data;
         });
   }
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`)
         .then(response => {
            return response.data;
         });
   }
}


