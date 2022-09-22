export const NumberModal = {
    title: "Ввести код",
    text: ["Введите код отправленный вам на телефон", "+7 (917) 888 88 88"],
    inputForms: ["Код"],
    mainButton: "Отправить",
    links: [{
        title: "Не получил(-а) код",
        modal: ""
    }],
    extrButton: "Вход для партнёров"
}


export const RegistrModal = {
    title: "Вход или регистрация",
    inputForms: ["Телефон"],
    mainButton: "Получить код",
    links: [{
        title: "Я уже зарегистировался(-ась)",
        // modal: LoginModal
    }],
    extrButton: "Вход для партнёров"
}


export const LoginModal = {
    title: "Вход",
    inputForms: ["Телефон", "Пароль"],
    mainButton: "Войти",
    links: [{
        title: "Войти с помощью смс",
        modal: NumberModal,
    }, {
        title: "Регистрация",
        modal: RegistrModal
    }],
    extrButton: "Вход для партнёров"
}


export const CompanyModal = {
    title: "Вход",
    inputForms: ["Наименование организации", "Телефон", "Пароль"],
    mainButton: "Получить код",
    links: [
        {
            title: "Я уже зарегистировался(-ась)",
            modal: LoginModal
        }],
    extrButton: "Вход для партнёров"
}