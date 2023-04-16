
import axios from "axios"

const URL:string = 'http://127.0.0.1:5000/api'

import { RegisterData } from "../pages/register"
import { LoginData } from "../pages/login"
import { getOptions } from "./jwt-config"
import { PostData } from "../pages/addPost"

export const login = (data: LoginData): Promise<any> => {
    return new Promise( (resolve, reject) => {
        axios.post(`${URL}/user/login`, data)
            .then( (response) => {
                resolve(response.data)
            })
            .catch( (error) => {
                reject(error.response.data)
            })
    })
} 

export const registerValidation = (data: RegisterData): Promise<any> => {
    return new Promise( (resolve, reject) => {
        axios.post(`${URL}/user/createValidation`, data)
            .then( (response) => {
                resolve(response.data)
            })
            .catch( (error) => {
                reject(error.response.data)
            })
    })
}


export const register = (data: RegisterData): Promise<any> => {
    return new Promise( (resolve, reject) => {
        axios.post(`${URL}/user/create`, data)
            .then( (response) => {
                resolve(response.data)
            })
            .catch( (error) => {
                reject(error.response.data)
            })
    })
} 

export const searchForUser = (data: string): Promise<any> => {
    const options = getOptions()
    return new Promise( (resolve, reject) => {
        axios.post(`${URL}/user/getOne`, { username: data }, options)
            .then( (response) => {
                resolve(response.data)
            })
            .catch( (error) => {
                reject(error.response.data)
            })
    })
}


export const getUserAndPosts = (data: string): Promise<any> => {
    return new Promise( (resolve, reject) => {
        axios.post(`${URL}/routes/getUserAndPosts`, { username: data })
            .then( (response) => {
                resolve(response.data)
            })
            .catch( (error) => {
                reject(error.response.data)
            })
    })
}


export const createPost = (data: PostData): Promise<any> => {
    return new Promise( (resolve, reject) => {
        axios.post(`${URL}/post/create`, data)
            .then( (response) => {
                resolve(response.data)
            })
            .catch( (error) => {
                reject(error.response.data)
            })
    })
}


export const getOnePost = (data: string | undefined): Promise<any> => {
    return new Promise( (resolve, reject) => {
        axios.post(`${URL}/post/getOne`, { id: data })
            .then( (response) => {
                resolve(response.data)
            })
            .catch( (error) => {
                reject(error.response.data)
            })
    })
}

export const likePost = (data: any): Promise<any> => {
    return new Promise( (resolve, reject) => {
        axios.post(`${URL}/like/newLike`, data)
            .then( (response) => {
                resolve(response.data)
            })
            .catch( (error) => {
                reject(error.response.data)
            })
    })
}

export const newUserRelationship = (data: any): Promise<any> => {
    return new Promise( (resolve, reject) => {
        axios.post(`${URL}/userRelationship/new`, data)
            .then( (response) => {
                resolve(response.data)
            })
            .catch( (error) => {
                reject(error.response.data)
            })
    })
}

export const getUserFollowers = (data: string): Promise<any> => {
    return new Promise( (resolve, reject) => {
        axios.post(`${URL}/userRelationship/getFollowers`, {following_id: data})
            .then( (response) => {
                resolve(response.data)
            })
            .catch( (error) => {
                reject(error.response.data)
            })
    })
}

export const getUserfollowing = (data: string): Promise<any> => {
    return new Promise( (resolve, reject) => {
        axios.post(`${URL}/userRelationship/getFollowing`, {follower_id: data})
            .then( (response) => {
                resolve(response.data)
            })
            .catch( (error) => {
                reject(error.response.data)
            })
    })
}