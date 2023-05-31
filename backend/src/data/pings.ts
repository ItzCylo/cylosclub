import { Entity } from '@acrd/types';
import { SelfUserDocument } from './models/user';

export default class Pings {
  public markAsRead(user: SelfUserDocument, message: Entity.Message) {
    if (user.lastReadMessageIds)
      user.lastReadMessageIds[message.channelId] = message.id;
    return user.save();
  }
}
