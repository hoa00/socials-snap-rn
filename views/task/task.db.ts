import Realm from 'realm';

const dbFilePath = 'task.realm';

export const realmInstance = () => {
  return Realm.open({
    path: dbFilePath,
    schema: [TaskSchema],
  });
};
