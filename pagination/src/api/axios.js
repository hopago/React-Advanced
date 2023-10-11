import axios from 'axios';

export const axiosOneExample = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const getPostsPage = async (pageParam = 1) => {
    const res = await axiosOneExample.get(`/posts?_page=${pageParam}`);
    return res.data;
};

export const axiosTwoExample = axios.create({
    baseURL: "https://reqres.in/api"
});

export const getUsersPage = async (pageParam = 1) => {
    const res = await axiosTwoExample.get(`/users?page=${pageParam}`);
    return res.data;
};