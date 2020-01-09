let defaultCity = '南宁'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {
    console.log(e)
}
export default {
    city: defaultCity
}
