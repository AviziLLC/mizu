import {HtmlRawString} from "./CardSchema";
import {CardTemplate} from "./CardTemplate";
import {CardType, CardTypeToSchemaMap} from "./CardType";

export class Card<T extends CardType> {
    constructor(
        public readonly id: string,
        public readonly schema: CardTypeToSchemaMap[T],
        /**
         * HTML template string that can be injected with schema variables from above.
         */
        public readonly template: CardTemplate,
    ) {
    }

    /**
     * Produce the final HTML representation of the card by injecting schema variables
     * into the template.
     *
     * This is a simple template engine that replaces placeholders in the format `{{key}}`
     * with corresponding values from the `schema` object.
     *
     * @returns The rendered HTML as a raw string.
     */
    public render(): HtmlRawString {
        // todo review below
        // let renderedHtml = this.template;
        //
        // for (const key of Object.keys(this.schema)) {
        //     const value = this.schema[key as keyof typeof this.schema];
        //     // Using a regex to replace all occurrences of {{key}}, allowing for optional whitespace.
        //     const placeholder = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g');
        //     // Replace with the value, or an empty string if the value is null/undefined.
        //     renderedHtml = renderedHtml.replace(placeholder, String(value ?? ''));
        // }
        //
        // return renderedHtml;
    }

    // todo: scheduling stuff
}