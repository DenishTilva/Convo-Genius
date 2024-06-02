"use client";

import { useMutation, useQuery } from "convex/react";
import {api} from "../../../convex/_generated/api"

import React from 'react'

const TaskPage = () => {
    const tasks = useQuery(api.tasks.tasks)
    const deleteTask = useMutation(api.tasks.deleteTask)
  return (
    <div className="p-10 flex flex-col gap-4">
      <h1 className="text-5xl">All tasks in real time</h1>
        {tasks?.map((task)=>(
            <div key={task._id} className="flex gap-2">
                <span>{task.text}</span>
                <button onClick={async()=>{
                    await deleteTask({id:task._id})
                }}>Delete</button>
            </div>
            
        ))}
    </div>
  )
}

export default TaskPage
