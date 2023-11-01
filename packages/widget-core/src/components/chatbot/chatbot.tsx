import { Component, Fragment, Listen, Prop, h } from '@stencil/core';
import { initSession } from '../../services/session/init-session';
import { initChatbot } from '../../services/chatbot/init-chatbot';
import { getSession } from '../../services/session/get-session';
import { Chatbot as ChatbotModel } from '../../models/chatbot';
import state from '../../store';

@Component({
  tag: 'cc-chatbot',
  styleUrl: 'chatbot.css',
  shadow: true,
})
export class Chatbot {
  @Prop() chatbotId: string;

  async componentWillLoad() {
    initSession(this.chatbotId);
    await initChatbot(this.chatbotId);
  }

  @Listen('message', { target: 'window' })
  closeChat(event: MessageEvent) {
    if (event.data === 'ccai-closed') {
      state.isOpen = false;
    }
  }

  render() {
    const chatbot: ChatbotModel = getSession().chatbot;

    if (chatbot) {      
      return (
        <Fragment>
          <cc-chat
            chatbotId={chatbot.id}
          />
          <cc-hints
            messages={chatbot.messages}
          />
          <cc-toggle
            bgColor={chatbot.bgColor}
            fgColor={chatbot.textColor}
          />
        </Fragment>
      );
    }
  }
}
