import { SessionKey } from '../../config/session-key';
import { Session } from '../../models/session';

export function getSession(): Session | null {
  const session = sessionStorage.getItem(SessionKey);

  if (!session) {
    return null;
  }

  return JSON.parse(session) as Session;
}
