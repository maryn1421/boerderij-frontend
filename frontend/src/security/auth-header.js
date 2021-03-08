

export default function authHeader() {

    if (localStorage.getItem("accessToken")) {
        return { Authorization: 'Bearer ' + localStorage.getItem("accessToken") }; // for Spring Boot back-end
    } else {
        return {};
    }
}