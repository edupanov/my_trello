import React from 'react';
import {action} from "@storybook/addon-actions";
import {Task} from "../Task";

export default {
    title: 'Task Stories',
    component: Task,
}

const removeCallback = action('Remove inside Task clicked')
const changeStatusCallback = action('Status changed inside Task')
const changeTitleCallback = action('Title changed inside Task')


export const TaskBaseExample = (props: any) => {
    return (
       <div>
           <Task
               changeTaskStatus={changeStatusCallback}
               changeTaskTitle={changeTitleCallback}
               removeTask={removeCallback}
               task={{id: '1', isDone: true, title: 'CSS'}}
               todolistId={'todolistId1'}
               />
           <Task
               changeTaskStatus={changeStatusCallback}
               changeTaskTitle={changeTitleCallback}
               removeTask={removeCallback}
               task={{id: '2', isDone: false, title: 'JS'}}
               todolistId={'todolistId2'}
           />
       </div>
    )
}
