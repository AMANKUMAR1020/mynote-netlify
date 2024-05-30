import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../features/auth/authSlice"

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isManager = false
    let isAdmin = false
    let status = "Employee"

    if (token) {

        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace("-", "+").replace("_", "/");
        const decoded =  JSON.parse(window.atob(base64));

        const { username, roles } = decoded.UserInfo

        isManager = roles.includes('Manager')
        isAdmin = roles.includes('Admin')

        if (isManager) status = "Manager"
        if (isAdmin) status = "Admin"

        return { username, roles, status, isManager, isAdmin }
    }

    return { username: '', roles: [], isManager, isAdmin, status }
}
export default useAuth













// import { useSelector } from 'react-redux'
// import { selectCurrentToken } from "../features/auth/authSlice"
// import jwtDecode from 'jwt-decode'

// const useAuth = () => {
//     const token = useSelector(selectCurrentToken)
//     let isManager = false
//     let isAdmin = false
//     let status = "Employee"

//     if (token) {
//         const decoded = jwtDecode(token)
//         const { username, roles } = decoded.UserInfo

//         isManager = roles.includes('Manager')
//         isAdmin = roles.includes('Admin')

//         if (isManager) status = "Manager"
//         if (isAdmin) status = "Admin"

//         return { username, roles, status, isManager, isAdmin }
//     }

//     return { username: '', roles: [], isManager, isAdmin, status }
// }
// export default useAuth