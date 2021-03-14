import Block from "../../../components/Block/Block.js";
import { IError404Props } from "./types.js";
import { template } from "./template.js";
import Link from "../../../components/Link/index.js";

export default class Error404 extends Block<IError404Props> {
    constructor() {
        const toLogin = new Link({
            text: "Войти в #ЧАТ",
            path: "/login"
        });

        super("div", {
            toLogin
        }, "full-height zero-margin");
    }

    render() {
        const compile = Handlebars.compile(template);
        const block = compile({
            title: "404",
            description: `"Прицел 15, трубка 20! Бац! Бац... и мимо" (с)`,
            toLogin: this.props.toLogin.renderToString()
        });

        return block;
    }
} 