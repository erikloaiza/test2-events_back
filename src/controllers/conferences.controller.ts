import { NextFunction, Request, Response } from 'express';
import { CreateConferenceDto } from '../dtos/conferences.dto';
import { Conference } from '../interfaces/conferences.interface';
import conferenceService from '../services/conferences.service';
import { RequestWithUser } from '../interfaces/auth.interface';

class ConferenceController {
  public conferenceService = new conferenceService();

  public getConferences = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllConferencesData: Conference[] = await this.conferenceService.findAllConferences();
      res.status(200).json({ data: findAllConferencesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  }

  public getConferenceById = async (req: Request, res: Response, next: NextFunction) => {
    const conferenceId: number = Number(req.params.id);

    try {
      const findOneConferenceData: Conference = await this.conferenceService.findConferenceById(conferenceId);
      res.status(200).json({ data: findOneConferenceData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  }

  public createConference = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const conferenceData: CreateConferenceDto = req.body;
    const { user } = req;

    try {
      const createConferenceData: Conference = await this.conferenceService.createConference(conferenceData,user);
      res.status(201).json({ data: createConferenceData, message: 'created' });
    } catch (error) {
      next(error);
    }
  }

  public updateConference = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const conferenceId: number = Number(req.params.id);
    const conferenceData = req.body;
    const { user } = req;

    try {
      const updateConferenceData: Conference = await this.conferenceService.updateConference(conferenceId, conferenceData, user);
      res.status(200).json({ data: updateConferenceData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  }

  public deleteConference = async (req: Request, res: Response, next: NextFunction) => {
    const conferenceId: number = Number(req.params.id);

    try {
      const deleteConferenceData: Conference = await this.conferenceService.deleteConferenceData(conferenceId);
      res.status(200).json({ data: deleteConferenceData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  }

  public joinConference = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const conferenceId: number = Number(req.params.id);
    const user = req.user;
    const conference = await this.conferenceService.joinConference(conferenceId, user);
    res.status(200).json({ data: conference, message: 'joined' });
  }
}

export default ConferenceController;
