import { Component, Prop, h } from '@stencil/core';
import { initSession } from '../../services/session/init-session';
import { initChatbot } from '../../services/chatbot/init-chatbot';
import { getSession } from '../../services/session/get-session';
import { Chatbot } from '../../models/chatbot';

@Component({
  tag: 'chatbot-wrapper',
  styleUrl: 'chatbot-wrapper.css',
  shadow: true,
})
export class ChatbotWrapper {
  @Prop() chatbotId: string;

  async componentWillLoad() {
    initSession(this.chatbotId);
    await initChatbot(this.chatbotId);
  }

  render() {
    const chatbot: Chatbot = getSession().chatbot;

    if (chatbot) {
      return (
        <toggle-button chatbot={chatbot} />
      );
    }
  }
}
