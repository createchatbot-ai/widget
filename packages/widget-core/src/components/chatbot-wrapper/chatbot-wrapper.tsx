import { Component, Fragment, Prop, State, h } from '@stencil/core';
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

  @State() isOpen: boolean = false;

  async componentWillLoad() {
    initSession(this.chatbotId);
    await initChatbot(this.chatbotId);
  }

  render() {
    const chatbot: Chatbot = getSession().chatbot;

    if (chatbot) {      
      return (
        <Fragment>
          <greeting-messages
            messages={chatbot.messages}
          />
          <toggle-button
            bgColor={chatbot.bgColor}
            fgColor={chatbot.textColor}
            isOpen={this.isOpen}
          />
        </Fragment>
      );
    }
  }
}
