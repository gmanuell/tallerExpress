const bad_request = (error,req,res,next) => {
    console.log(error);
    return res.status(400).json({
        success: false,
        response: error,
        message: `La peticion fue errada`
    })
}

export default bad_request