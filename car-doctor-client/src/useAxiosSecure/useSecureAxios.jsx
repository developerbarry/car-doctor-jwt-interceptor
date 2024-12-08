import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

const useSecureAxios = () => {
    const { userLogOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Register interceptor
        const interceptor = axiosSecure.interceptors.response.use(
            (res) => res,
            (error) => {
                if (error.response?.status === 401 || error.response?.status === 403) {
                    userLogOut()
                        .then(() => navigate('/deshboard/login'))
                        .catch(console.error);
                }
                return Promise.reject(error); // Propagate error if needed
            }
        );

        // Cleanup interceptor on component unmount
        return () => {
            axiosSecure.interceptors.response.eject(interceptor);
        };

    }, [userLogOut, navigate]);


    return axiosSecure;
};

export default useSecureAxios;






// const axiosSecure = axios.create({
//     baseURL: 'http://localhost:5000',
//     withCredentials: true
// })

// const useSecureAxios = () => {
//     const { userLogOut } = useContext(AuthContext)
//     const navigate = useNavigate()

//     useEffect(() => {
//         axiosSecure.interceptors.response.use((res) => {
//             return res;
//         }, (error) => {

//             if (error.response.status === 401 || error.response.status === 403) {
//                 userLogOut()
//                     .then(() => {
//                         navigate('/deshboard/login')
//                     })
//                     .catch(error => {
//                         console.log(error)
//                     })
//             }

//         })
//     }, [userLogOut, navigate])

//     return axiosSecure
// };

// export default useSecureAxios;


