export interface IModalContent {
    title: string,
    text?: string[],
    inputForms: string[],
    mainButton: string,
    links: any,
    extrButton: string
}

export interface IModalsContent{
    modal: IModalContent
}