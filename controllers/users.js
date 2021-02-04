import express from 'express';
import { v4 as uuidv4 } from 'uuid';




let users=[];



 export const getUsers=(req,res)=>{
    res.send(users);
}

export const createUser= (req,res)=>{
    const user=req.body;
    const userId= uuidv4(); 
    const userWithId = {...user, id:userId}
    users.push(userWithId);
    res.send(`user with name ${user.firstName} created successully in database`);
}


export const getUser = (req ,res)=>{
    const {id}=req.params;
    const user=users.find((m)=>m.id===id);
    res.send(user);
    
}

export const deleteUser=(req,res)=>{
    const {id}=req.params;

    users=users.filter((user)=>user.id !==id);

   
}


export const updateUser=(req,res)=>{
    const {id}=req.params;

    const {firstName,lastName,age} = req.body;

    const user=users.find((user)=>user.id===id);
 
    if(firstName) 
    {user.firstName=firstName;}

    if(lastName) {user.lastName=lastName;}

    if(age)
    {user.age=age;}

    res.send(` user with id: ${id} is updated`);
}











