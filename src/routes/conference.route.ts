import { Router } from 'express';
import ConferencesController from '../controllers/conferences.controller';
import { CreateConferenceDto } from '../dtos/conferences.dto';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';
import permissionMiddleware from '../middlewares/permission.middleware';

class ConferencesRoute implements Route {
  public path = '/conference';
  public router = Router();
  public conferencesController = new ConferencesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.conferencesController.getConferences);
    this.router.get(`${this.path}/:id(\\d+)`, this.conferencesController.getConferenceById);
    this.router.post(`${this.path}`, authMiddleware ,
                     permissionMiddleware('cconf'),
                     validationMiddleware(CreateConferenceDto),
                     this.conferencesController.createConference);
    this.router.post(`${this.path}/join/:id`, authMiddleware ,
                     permissionMiddleware('jconf'),
                     this.conferencesController.joinConference);
    this.router.put(`${this.path}/:id(\\d+)`, authMiddleware,
                    permissionMiddleware('econf'),
                    validationMiddleware(CreateConferenceDto, true),
                    this.conferencesController.updateConference);
    this.router.delete(`${this.path}/:id(\\d+)`, this.conferencesController.deleteConference);
  }
}

export default ConferencesRoute;
