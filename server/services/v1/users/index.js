create = async (req, res)=>{
    res.json(
        {
            status:"success",
            message:"User created successfully",
            response:{
                key_one:"some data adter saving it in DB"
            }
        }
    )
}

module.exports = {create}
