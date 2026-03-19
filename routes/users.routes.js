import { Router } from "express";

const UserRouter = Router()

UserRouter.get("/users",(req,res)=>{res.send({"message":"Get all Users"
}
)})
UserRouter.get("/users/:id",(req,res)=>{res.send({"message":"Get Users details"
}
)})
UserRouter.put("/users/:id",(req,res)=>{res.send({"message":"Update Users by id"
}
)})
UserRouter.post("/users",(req,res)=>{res.send({"message":"Create new User"
}
)})
UserRouter.delete("/users",(req,res)=>{res.send({"message":"Delete Users"
}
)})

export default UserRouter;