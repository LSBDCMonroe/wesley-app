import UserController from './user-controller';

const SetRoutes = (app : any) => {
  app    
    .get('/api/test', (req: any,res: any)=>res.send('Online'))
    .post('/api/register', UserController.register)
    .post('/api/search-user', UserController.searchUser)
    .post('/api/update-user', UserController.searchUser); //update classification
    //post to increase count
}

export { SetRoutes };