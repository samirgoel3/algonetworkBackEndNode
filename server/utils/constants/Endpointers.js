const Config = require('../../config/env_config/config')
module.exports = {
    CREATE_USER:{
        name: "Create user",
        endpoint:"/create",
        posting_script: false,
        response: false,
        request_type:"POST",
        platform_type:"Mobile App",
        url:Config.app.base_url+"api/"+Config.app.api_version+"/user/create",
        description: "This api is used only creating user only as a normal user"
    },
    LOGIN_USER:{
        name: "Login user",
        endpoint:"/login",
        posting_script: false,
        response: false,
        request_type:"POST",
        platform_type:"Mobile App",
        url:Config.app.base_url+"api/"+Config.app.api_version+"/user/login",
        description: "This api is used only for login user"
    },
    CHECK_EMAIL_EXIST:{
        name: "Email Exist",
        endpoint:"/check-email",
        posting_script: false,
        response: false,
        request_type:"POST",
        platform_type:"Mobile App",
        url:Config.app.base_url+"api/"+Config.app.api_version+"/user/check-email",
        description: "This api is user for email exist in DB or not"
    },
    RESET_PASSWORD:{
        name: "Reset Password",
        endpoint:"/reset-password",
        posting_script: false,
        response: false,
        request_type:"POST",
        platform_type:"Mobile App",
        url:Config.app.base_url+"api/"+Config.app.api_version+"/user/reset-password",
        description: "This api is user for email exist in DB or not"
    },

    CREATE_ALGO_CATEGORY:{
        name: "Create Algo Category",
        endpoint:"/create",
        posting_script: false,
        response: false,
        request_type:"POST",
        platform_type:"Mobile App",
        url:Config.app.base_url+"api/"+Config.app.api_version+"/algo-category/create",
        description: "This api is user is used for creating algo categories"
    },

    CREATE_ALGORITHM:{
        name: "For Creating algorithm",
        endpoint:"/create",
        posting_script: false,
        response: false,
        request_type:"POST",
        platform_type:"Mobile App",
        url:Config.app.base_url+"api/"+Config.app.api_version+"/algorithm/create",
        description: "This api is user is used for creating algorithm"
    },
    GET_ALGORITHM:{
        name: "For Fetching specific algorithm",
        endpoint:"/",
        posting_script: false,
        response: false,
        request_type:"GET",
        platform_type:"Mobile App",
        url:Config.app.base_url+"api/"+Config.app.api_version+"/algorithm/",
        description: "This api is user is used for fetching a specific algorithm"
    },
    GET_ALL_CATEGORIES:{
        name: "For getting all categories",
        endpoint:"/",
        posting_script: false,
        response: false,
        request_type:"GET",
        platform_type:"Mobile App",
        url:Config.app.base_url+"api/"+Config.app.api_version+"/algo-category/",
        description: "This api is user is used for fetching a specific algorithm"
    },
    GET_ALGO_BY_CATEGORIES:{
        name: "For getting all algorithm by a particular category",
        endpoint:"/list",
        posting_script: false,
        response: false,
        request_type:"POST",
        platform_type:"Mobile App",
        url:Config.app.base_url+"api/"+Config.app.api_version+"/list/",
        description: "This api is user is used for fetching all algorithm by category id"
    },
    SEARCH_ALGORITHM:{
        name: "For Searching algorithm",
        endpoint:"/search",
        posting_script: false,
        response: false,
        request_type:"POST",
        platform_type:"Mobile App",
        url:Config.app.base_url+"api/"+Config.app.api_version+"/search/",
        description: "This api is user for searching algorithm and anything inside category"
    },

    // LOGIN_USER:"/login",
    // CHECK_EMAIL_EXIST:"/check-email-exist",
    // RESET_PASSWORD:"/reset-password",
    // VERIFY_OTP:"/verify-otp",
}
