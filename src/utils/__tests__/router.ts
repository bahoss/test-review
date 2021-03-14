import Registration from "../../pages/registration/Registration";
import Router from "../router.js";

describe("Router", function () {
    describe("getRoute", function () {
        it("Поиск маршрута", function () {
            const router = new Router(".test");
            router.use("/test/registration", Registration);

            const route = Router.__instance.getRoute("/test/registration");
            expect(route).not.toBeUndefined();
            expect(route).toHaveProperty("_blockClass");
        });

        it("Не найденный маршрут", function () {
            const router = new Router(".mocha");
            router.use("/test/registration", Registration);

            const route = Router.__instance.getRoute("/f7yds87fs7d");
            expect(route).toBeUndefined();
        });
    });
});