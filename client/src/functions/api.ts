
import axios from "axios"

const URL:string = 'http://127.0.0.1:5000/api'
axios.defaults.withCredentials = true;

import { LoginData } from "../pages/login"
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

import { RegisterData } from "../pages/register"
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

import { getOptions } from "./jwt-config"
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


export const getAllUserPosts = (data: number): Promise<any> => {
    return new Promise( (resolve, reject) => {
        axios.post(`${URL}/post/getAllUserPosts`, { user_id: data })
            .then( (response) => {
                resolve(response.data)
            })
            .catch( (error) => {
                reject(error.response.data)
            })
    })
}

import { PostData } from "../pages/addPost"
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


export const getOnePost = (data: number): Promise<any> => {
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

