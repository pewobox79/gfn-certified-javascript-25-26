export interface UserItemType {
    username: string
    name: string
    id:number
    lengthOfUsers?:number
}

export type status = "loading" | "success"

export interface PostItemType{
    title: string
    body: string
    id: number
}

export interface BackButtonType{
    type: "back" | "custom"
    link?: string
    label: string
    btnColor?: "warning" | "secondary" | "primary"
}