const Todo= require("../models/Todo")

exports.deleteTodo= async(req, res)=>{
    try{

        const {id}= req.params;
        await Todo.findByIdAndDelete({'_id':id});
        res.status(200).json({
            "success": true,
            "message": `Data deleted with id: ${id}`,
        });
        
    }
    catch(e){
        console.error(e);
        res.status(500).json({
            success: false, 
            message: e.message,
            data: 'internal server error'
        })
    }
}