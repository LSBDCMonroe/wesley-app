import UserController from './user-controller';

const SetRoutes = (app : any) => {
  app     
    .post('/api/register', UserController.register)
    .post('/api/search-user', UserController.searchUser)
    .post('/api/update-user', UserController.searchUser) //update classification
    .get('/', (req: any,res: any)=>res.send({ message: 'Online' }));
    //post to increase count
}

export { SetRoutes };