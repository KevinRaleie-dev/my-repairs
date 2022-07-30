export type UpdateAddressProps = {
	streetAddress: string
	city: string
	suburb: string
	province: string
	postalCode: string
}
export type CustomerSignUpFormProps = {
    emailOrPhone: string
    firstName: string
    lastName: string
    password?: string
    provider?: string
}

export type UpdateServiceProviderDetailsProps = {
    firstName: string
    lastName: string
    email: string
    phone: string
}

export type FormProps = {    
    profession: string
    bio?:string    
    ratePerHour: number
    skills: string[]
}
