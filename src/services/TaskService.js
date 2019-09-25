import { Task } from '../models';

const statuses = ['active', 'pending', 'finished'];

function checkStatus(status) {
  return new Promise((resolve, reject) => {
    if (!statuses.includes(status))
      reject(new Error(`Invalid status: '${status}'`));
    resolve();
  });
}

async function save({ name, description, status='active' }, userId) {
  if (!name)
    throw new Error('Task name field not provided');
    
  if (!description)
    throw new Error('Task description field not provided');

  if (!userId)
    throw new Error('Task owner user_id not provided');
  
  await checkStatus(status).catch(err => { throw err; });
  
  const task = await Task.create({
    task_name: name,
    task_description: description,
    task_status: status,
    TBUSERUserId: userId,
  }).catch(err => {
    throw new Error(`Couldn't store new Task: ${err.message}`);
  });

  return task.dataValues;
}

async function getByUserId(userId) {
  if (!userId)
    throw new Error('Task owner user_id not provided');
  
  const resultTasks = await Task.findAll({
    where: {
      TBUSERUserId: userId,
    }
  }).catch(err => {
    throw new Error(`Couldn't find task: ${err.message}`);
  });

  const userTasks = resultTasks.map(task => task.dataValues);
  return userTasks;
}

async function updateTaskStatus(taskId, status, userId) {
  if (!taskId)
    throw new Error('Task id field not provided');
  
  if (!status)
    throw new Error('New task status not provided');
  
  if (!userId)
    throw new Error('Task owner user_id not provided');
  
  await checkStatus(status).catch(err => { throw err; });
  
  const updatedTask = await Task.update({
    task_status: status
  }, {
    where: {
      task_id: taskId,
      TBUSERUserId: userId,
    }
  }).catch(err => {
    throw new Error(`Couldn't update task: ${err.message}`);
  });

  return updatedTask;
}

export default {
  save,
  getByUserId,
  updateTaskStatus,
};
