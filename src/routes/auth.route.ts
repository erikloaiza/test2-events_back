import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import { CreateUserDto, LoginUserDto } from '../dtos/users.dto';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';

class AuthRoute implements Route {
  public path = '/auth';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/signup`, validationMiddleware(CreateUserDto), this.authController.signUp);
    this.router.post(`${this.path}/login`, validationMiddleware(LoginUserDto), this.authController.logIn);
    this.router.post(`${this.path}/logout`, authMiddleware, this.authController.logOut);
    this.router.get(`${this.path}/permissions`, authMiddleware, this.authController.getPermissions);
  }
}

export default AuthRoute;
