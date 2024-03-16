const Todo= require("../models/Todo")

exports.updateTodo= async(req, res)=>{
    try{

        const {id}= req.params;
        const {title, description}= req.body;
        console.log("Data not updated");
        const data= await Todo.findByIdAndUpdate({'_id':id},{
            title, description, updatedAt:Date.now()
        });
        res.status(200).json({
            "success": true,
            "message": `Data updated with id: ${id}`,
            data
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