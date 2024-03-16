const Todo= require("../models/Todo");

exports.getAllTodos= async(req, res)=>{
    try{
        const data= await Todo.find({});
            
        res.status(200).json({
            "success": true,
            "message": "All data sent",
            data
        });
    }
    catch(e){
        res.status(500).json({
            success: false, 
            message: e.message,
            data: 'internal server error'
        })
    }
}

exports.getTodo= async(req, res)=>{
    try{
        const id= req.params.id;
        const data= await Todo.findById({
            '_id':id
        });
            
        if(!data){
            return res.status(404).json({
                "success": false,
                "message":"data not found"
            })
        }
        res.status(200).json({
            "success": true,
            "message": `Data sent with id: ${id}`,
            data
        });
    }
    catch(e){
        res.status(500).json({
            success: false, 
            message: e.message,
            data: 'internal server error'
        })
    }
}