import { Task } from '../models';

const statuses = ['active', 'pending', 'finished'];

async function save({ name, description, status='active' }, user_id) {
  if (!name)
    throw new Error('Task name field not provided');
    
  if (!description)
    throw new Error('Task description field not provided');

  if (!user_id)
    throw new Error('User_id from task owner not provided');
  
  if (!(statuses.includes(status)))
    throw new Error('Invalid status');
  
  const task = await Task.create({
    task_name: name,
    task_description: description,
    task_status: status,
    TBUSERUserId: user_id,
  }).catch(err => {
    throw new Error(`Couldn't store new Task: ${err.message}`);
  });

  return task.dataValues;
}

export default {
  save,
};
