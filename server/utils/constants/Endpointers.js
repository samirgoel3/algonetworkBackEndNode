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


    // LOGIN_USER:"/login",
    // CHECK_EMAIL_EXIST:"/check-email-exist",
    // RESET_PASSWORD:"/reset-password",
    // VERIFY_OTP:"/verify-otp",
}
