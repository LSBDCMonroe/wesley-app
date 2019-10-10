import UrlController from './UserController';

const SetRoutes = (app : any) => {
  app    
    .post('/register', UrlController.register);
}

export { SetRoutes };