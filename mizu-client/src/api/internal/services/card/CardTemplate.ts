import {CardSchema, CustomCardSchema, HtmlRawString} from "./CardSchema";
import * as handlebars from "handlebars";

export class CardTemplate {
    public readonly compiledTemplate: handlebars.TemplateDelegate;

    constructor(public readonly htmlTemplateString: string, public readonly cssString: string, public readonly fields: CardSchema | CustomCardSchema) {
        this.compiledTemplate = handlebars.compile(htmlTemplateString);
    }

    public renderToHtml() {
        const finalHtml = this.compiledTemplate(this.fields);
        return (`
            <style>
                ${this.cssString}
            </style>
            
            ${finalHtml}
        `);
    }

}

export const basicCardFrontTemplate: CardTemplate = `
<div>{{front}}</div>
`;

export const basicCardFrontTemplateCompiled = handlebars.compile(basicCardFrontTemplate);

export const basicCardBackTemplate: CardTemplate = `
<div>{{front}}</div>
<hr/>
<div>{{back}}</div>
`;

export const basicCardBackTemplateCompiled = handlebars.compile(basicCardBackTemplate)

