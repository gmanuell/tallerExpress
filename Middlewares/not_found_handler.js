const not_found_handler = (req,res,next) => {
    return res.status(404).json({
        success: false, 
        message: 'Ruta no encontrada - Not found'
    })
}

export default not_found_handler