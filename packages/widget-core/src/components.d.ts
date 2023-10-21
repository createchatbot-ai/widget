/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Chatbot } from "./models/chatbot";
export { Chatbot } from "./models/chatbot";
export namespace Components {
    interface ChatBubble {
        "fill": string;
    }
    interface ChatbotWrapper {
        "chatbotId": string;
    }
    interface ChevronDown {
        "stroke": string;
    }
    interface ToggleButton {
        "chatbot": Chatbot;
        "isOpen": boolean;
    }
}
declare global {
    interface HTMLChatBubbleElement extends Components.ChatBubble, HTMLStencilElement {
    }
    var HTMLChatBubbleElement: {
        prototype: HTMLChatBubbleElement;
        new (): HTMLChatBubbleElement;
    };
    interface HTMLChatbotWrapperElement extends Components.ChatbotWrapper, HTMLStencilElement {
    }
    var HTMLChatbotWrapperElement: {
        prototype: HTMLChatbotWrapperElement;
        new (): HTMLChatbotWrapperElement;
    };
    interface HTMLChevronDownElement extends Components.ChevronDown, HTMLStencilElement {
    }
    var HTMLChevronDownElement: {
        prototype: HTMLChevronDownElement;
        new (): HTMLChevronDownElement;
    };
    interface HTMLToggleButtonElement extends Components.ToggleButton, HTMLStencilElement {
    }
    var HTMLToggleButtonElement: {
        prototype: HTMLToggleButtonElement;
        new (): HTMLToggleButtonElement;
    };
    interface HTMLElementTagNameMap {
        "chat-bubble": HTMLChatBubbleElement;
        "chatbot-wrapper": HTMLChatbotWrapperElement;
        "chevron-down": HTMLChevronDownElement;
        "toggle-button": HTMLToggleButtonElement;
    }
}
declare namespace LocalJSX {
    interface ChatBubble {
        "fill"?: string;
    }
    interface ChatbotWrapper {
        "chatbotId"?: string;
    }
    interface ChevronDown {
        "stroke"?: string;
    }
    interface ToggleButton {
        "chatbot"?: Chatbot;
        "isOpen"?: boolean;
    }
    interface IntrinsicElements {
        "chat-bubble": ChatBubble;
        "chatbot-wrapper": ChatbotWrapper;
        "chevron-down": ChevronDown;
        "toggle-button": ToggleButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "chat-bubble": LocalJSX.ChatBubble & JSXBase.HTMLAttributes<HTMLChatBubbleElement>;
            "chatbot-wrapper": LocalJSX.ChatbotWrapper & JSXBase.HTMLAttributes<HTMLChatbotWrapperElement>;
            "chevron-down": LocalJSX.ChevronDown & JSXBase.HTMLAttributes<HTMLChevronDownElement>;
            "toggle-button": LocalJSX.ToggleButton & JSXBase.HTMLAttributes<HTMLToggleButtonElement>;
        }
    }
}
