/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface UnlockerKit {
        "text": string;
    }
}
export interface UnlockerKitCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUnlockerKitElement;
}
declare global {
    interface HTMLUnlockerKitElementEventMap {
        "unlockedChanged": boolean;
        "percentageChanged": number;
    }
    interface HTMLUnlockerKitElement extends Components.UnlockerKit, HTMLStencilElement {
        addEventListener<K extends keyof HTMLUnlockerKitElementEventMap>(type: K, listener: (this: HTMLUnlockerKitElement, ev: UnlockerKitCustomEvent<HTMLUnlockerKitElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLUnlockerKitElementEventMap>(type: K, listener: (this: HTMLUnlockerKitElement, ev: UnlockerKitCustomEvent<HTMLUnlockerKitElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLUnlockerKitElement: {
        prototype: HTMLUnlockerKitElement;
        new (): HTMLUnlockerKitElement;
    };
    interface HTMLElementTagNameMap {
        "unlocker-kit": HTMLUnlockerKitElement;
    }
}
declare namespace LocalJSX {
    interface UnlockerKit {
        "onPercentageChanged"?: (event: UnlockerKitCustomEvent<number>) => void;
        "onUnlockedChanged"?: (event: UnlockerKitCustomEvent<boolean>) => void;
        "text"?: string;
    }
    interface IntrinsicElements {
        "unlocker-kit": UnlockerKit;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "unlocker-kit": LocalJSX.UnlockerKit & JSXBase.HTMLAttributes<HTMLUnlockerKitElement>;
        }
    }
}
