import { getSession } from '../session/get-session';

export function getShowHints(): boolean {
  const session = getSession();

  if (!session) {
    return true;
  }

  return session.showHints;
}
