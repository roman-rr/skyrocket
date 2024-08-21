/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SkyrocketAi {
        "text": string;
    }
}
export interface SkyrocketAiCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSkyrocketAiElement;
}
declare global {
    interface HTMLSkyrocketAiElementEventMap {
        "unlockedChanged": boolean;
        "percentageChanged": number;
    }
    interface HTMLSkyrocketAiElement extends Components.SkyrocketAi, HTMLStencilElement {
        addEventListener<K extends keyof HTMLSkyrocketAiElementEventMap>(type: K, listener: (this: HTMLSkyrocketAiElement, ev: SkyrocketAiCustomEvent<HTMLSkyrocketAiElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLSkyrocketAiElementEventMap>(type: K, listener: (this: HTMLSkyrocketAiElement, ev: SkyrocketAiCustomEvent<HTMLSkyrocketAiElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLSkyrocketAiElement: {
        prototype: HTMLSkyrocketAiElement;
        new (): HTMLSkyrocketAiElement;
    };
    interface HTMLElementTagNameMap {
        "skyrocket-ai": HTMLSkyrocketAiElement;
    }
}
declare namespace LocalJSX {
    interface SkyrocketAi {
        "onPercentageChanged"?: (event: SkyrocketAiCustomEvent<number>) => void;
        "onUnlockedChanged"?: (event: SkyrocketAiCustomEvent<boolean>) => void;
        "text"?: string;
    }
    interface IntrinsicElements {
        "skyrocket-ai": SkyrocketAi;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "skyrocket-ai": LocalJSX.SkyrocketAi & JSXBase.HTMLAttributes<HTMLSkyrocketAiElement>;
        }
    }
}
