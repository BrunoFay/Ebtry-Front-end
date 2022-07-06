export enum TaskStatus {
  TO_DO = 'toDo',
  IN_PROGRESS = 'inProgress',
  DONE = 'done',
  REVIEW = 'review',
  TESTS = 'tests',
  Paused = 'paused',
}
export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}
export type UserLogin = {
  email: string;
  password: string;
};
export type User = {
  id: string;
  email: string;
  role: string;
}
export type Api = {
  id?: string;
  title: string;
  description: string;
  createdAt: Date;
  status: TaskStatus;
  members: string[];
  createdBy: string;
  priority: Priority;
};
export type StatusBoard = {
  [TaskStatus.TO_DO]: Api[];
  [TaskStatus.IN_PROGRESS]: Api[];
  [TaskStatus.DONE]: Api[];
  [TaskStatus.REVIEW]: Api[];
  [TaskStatus.TESTS]: Api[];
  taskArrayLength: number;
};
