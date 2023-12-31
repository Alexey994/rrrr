import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "8ceaae6d-af4c-42b9-a67f-2d91e8ab3115",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "8ceaae6d-af4c-42b9-a67f-2d91e8ab3115",
      },
    });
  },
  unfollow(userId) {
    return instance.delete(
      `follow/${userId}`,
      {},
      {
        withCredentials: true,
        headers: {
          "API-KEY": "8ceaae6d-af4c-42b9-a67f-2d91e8ab3115",
        },
      }
    );
  },
  
  getProfile(userId) {
    console.log("Obsolete method. Please profileAPI object");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return (
      instance.put(`profile/status/`, { status: status })
    );
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },

  login(email , password , rememberMe){
    return instance.post(`auth/login` , { email , password , rememberMe})
    
  },
  
  logout(){
    return instance.delete(`auth/login`)
  }
};


