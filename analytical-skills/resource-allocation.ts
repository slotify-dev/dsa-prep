/**
 *
 *
 * Problem 2: Optimizing Resource Allocation
 * Problem Statement: You are managing a team of workers and have a list of tasks to complete.
 *   Each task has a duration (in hours) and a deadline.
 *   Your goal is to allocate tasks to workers such that:
 *
 *   1. No worker is overloaded (i.e., total hours per worker do not exceed a given limit).
 *   2. Tasks are completed before their deadlines.
 */
interface Task {
  id: number;
  duration: number;
  deadline: number;
}

function allocateTasks(tasks: Task[], maxHoursPerWorker: number) {
  // sort the tasks by deadline (ascending)
  tasks.sort((a, b) => a.deadline - b.deadline);

  let currentWorker = 0;
  let currentWorkerHours = 0;

  const workers: number[][] = [];

  for (const task of tasks) {
    const worhHourPerWorker = currentWorkerHours + task.duration;
    if (worhHourPerWorker > maxHoursPerWorker) {
      currentWorker++;
      currentWorkerHours = 0; // reset the hours for the new worker
    }
    workers[currentWorker].push(task.id);
    currentWorkerHours += task.duration;
  }

  return workers;
}

console.log(
  allocateTasks(
    [
      { id: 1, duration: 2, deadline: 5 },
      { id: 2, duration: 3, deadline: 7 },
      { id: 3, duration: 1, deadline: 3 },
      { id: 4, duration: 4, deadline: 6 },
    ],
    5
  )
);
