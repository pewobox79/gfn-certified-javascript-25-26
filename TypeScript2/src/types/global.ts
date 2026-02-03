export interface UserType {
    name: string
    age: number
    isSick?: boolean
    shoppingItems: ShoppingItemType[]
    address: AddressType
    gender: GenderType
    protocols?: [ProtocollType?, ProtocollType?, ProtocollType?, ProtocollType?]
    checkoutShoppingItems: (multiplikator?: number) => number
    myGenericFunction: ()=>void
    items: Array<string>
    items2: string[]
}
export interface MyNewUserType extends UserType {
    color: SkinColorType
    height: number
}
type SkinColorType = "black" | "white"
interface ShoppingItemType {
    title: string
    id: number | string
    amount: number
    quantity: number
    description: string

}
interface ProtocollType {
    user?: UserType
    date: string
    author: EmployerType
    gender: GenderType
}

interface EmployerType {
    name: string
    role: EmployerRoleType
}
type EmployerRoleType = "Chefarzt" | "Assistenzarzt"
type GenderType = "männlich" | "weiblich" | "diverse" | "er/sie"
type CityType = string
type CountryType = "Germany"
type stateType ='inProgress' | 'success' | 'error'
type state = String
type AddressType = {
    city: CityType
    zipCode: number
    country: CountryType
}

interface PostType {
    id: number
    uid: number
    body: string
    title: string
}

interface PostsType {
    items: Array<PostType>
}

function getFirstElement<T>(arr: Array<T>): T | undefined {

    return arr.length > 0 ? arr[0] : undefined;

}

getFirstElement<number>([10])
getFirstElement<string>(["hallo"])

function hallo(value){
console.log(value)
}

hallo("peter")