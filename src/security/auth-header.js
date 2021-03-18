

export default function authHeader(user) {

    if (user && user.token) {
        return { Authorization: 'Bearer ' + atob(user.token) }; // for Spring Boot back-end
    } else {
        return {};
    }
}