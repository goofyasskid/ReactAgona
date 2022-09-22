import { LoginModal } from "./modalMock";

export const RegistrModal = {
    title: "Вход или регистрация",
    inputForms: ["Телефон"],
    mainButton: "Получить код",
    links: [{
        title: "Я уже зарегистировался(-ась)",
        modal: LoginModal
    }],
    extrButton: "Вход для партнёров"
}