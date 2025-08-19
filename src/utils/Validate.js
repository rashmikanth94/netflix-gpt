export const vadidateData = (email, password) => {

    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(emailRegex.test(email) === false) {
        return {
            status: false,
            message: "Invalid email format"
        }
    }

    if(password.length < 8 || password.length > 20) {

        return {
            status: false,
            message: "Password must be between 8 and 20 characters"
        }
    }


    return {
        status: true,
        message: "Password must be between 8 and 20 characters"
    }
}