export type Chatbot = {
  id: string;
  name: string;
  bgColor: string;
  textColor: string;
  avatar: string | null;
  messages: string[];
  suggestions: string[];
}
