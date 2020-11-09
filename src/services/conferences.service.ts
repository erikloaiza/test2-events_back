import { User } from 'interfaces/users.interface';
import { CreateConferenceDto } from '../dtos/conferences.dto';
import HttpException from '../exceptions/HttpException';
import { Conference } from '../interfaces/conferences.interface';
import conferencesModel from '../models/conferences.model';
import userConferenceModel from '../models/user_conference.model';
import userModel from '../models/users.model';
import { isEmptyObject } from '../utils/util';

class ConferenceService {
  public conferences = conferencesModel;
  public userConferences = userConferenceModel;

  public async findAllConferences(): Promise<Conference[]> {
    const conferences: Conference[] = await this.conferences.findAll({
      where:{ state:1 }, attributes: ['name', 'date', 'location', 'quota'], include: [{ model:userModel, where:{ roleId:1 } }],
    });
    return conferences;
  }

  public async findConferenceById(conferenceId: number): Promise<Conference> {
    const findConference: Conference = await this.conferences.findByPk(conferenceId);
    if (!findConference) throw new HttpException(409, "You're not user");

    return findConference;
  }

  public async createConference(conferenceData: CreateConferenceDto, user: User): Promise<Conference> {
    if (isEmptyObject(conferenceData)) throw new HttpException(400, "You're not conferenceData");

    const createConferenceData: Conference = await this.conferences.create({ ...conferenceData });
    await this.userConferences.create({ conferenceId:createConferenceData.id, userId:user.id });

    return createConferenceData;
  }

  public async updateConference(conferenceId: number, conferenceData: Conference, user:User): Promise<Conference> {
    if (isEmptyObject(conferenceData)) throw new HttpException(400, "You're not conferenceData");

    const userId = user.id;
    const conference = await this.userConferences.findOne({ where:{ conferenceId, userId } });

    if (!conference) throw new HttpException(403, "The conference doesn't exist or Yo're not the available to edit it");

    if (conferenceData.state !== undefined) {
      const totalAttendands = await this.userConferences.findAndCountAll({ where:{ conferenceId } });
      if (totalAttendands) {
        throw new HttpException(409, 'Conference already has attendands');
      }
    }

    const updateConference: Conference = await this.conferences.update({ ...conferenceData }, { where: { id: conferenceId } });
    if (!updateConference) throw new HttpException(409, "You're not conference");

    return updateConference;
  }

  public async deleteConferenceData(conferenceId: number): Promise<Conference> {
    const deleteConferece: Conference = await this.conferences.destroy({ where: { id: conferenceId } });
    if (!deleteConferece) throw new HttpException(409, "You're not conference");

    return deleteConferece;
  }

  public async joinConference(conferenceId: number, user: User): Promise<Conference> {
    try {
      const findConference: Conference = await this.conferences.findByPk(conferenceId);
      if (!findConference) throw new HttpException(409, "You're not user");
      if (!findConference.quota) throw new HttpException(409,  `he event ${findConference.name} has no quota available`);

      const userConference = await this.userConferences.findOne({ where: { conferenceId, userId:user.id } });

      if (!userConference) {
        const quota = findConference.quota - 1;
        const updatedConference = await this.conferences.update({ quota }, { where:{ id:conferenceId } });
        await this.userConferences.create({ conferenceId, userId:user.id });
        return updatedConference;
      }
      return findConference;
    }catch (e) {
      console.log(e);
      throw new HttpException(510, 'There was an error');
    }

  }
}

export default ConferenceService;
