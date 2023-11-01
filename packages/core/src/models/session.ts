import { Chatbot } from './chatbot';

export type Session = {
  id: string;
  isOpen: boolean;
  showHints: boolean;
  chatbot?: Chatbot;
}
