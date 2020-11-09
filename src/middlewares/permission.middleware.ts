import { NextFunction, Response, RequestHandler } from 'express';
import HttpException from '../exceptions/HttpException';
import { RequestWithUser } from '../interfaces/auth.interface';
import permissionsModel from '../models/permissions.model';

function permissionMiddleware(slug:string): RequestHandler {
  return async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const { roleId } = req.user;
    const hasPermission = await permissionsModel.findOne({ where:{ roleId, slug } });
    if (hasPermission) {
      next();
    }else {
      next(new HttpException(403, "You don't have the permissions to use this route"));
    }
  };
}

export default permissionMiddleware;
