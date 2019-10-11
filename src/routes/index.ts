import UserController from './user-controller';

const SetRoutes = (app : any) => {
  app    
    .post('/register', UserController.register)
    .post('/search-user', UserController.searchUser)
    .post('/update-user', UserController.searchUser); //update classification
    //post to increase count
}

export { SetRoutes };