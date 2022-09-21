export interface IModalContent {
    title: string,
    text?: string[],
    inputForms: string[],
    mainButton: string,
    links: string[],
    extrButton: string
}

export interface IModalsContent{
    modal: IModalContent
}