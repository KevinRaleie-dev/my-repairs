import axios from "axios";
import type { CustomerSignUpFormProps, FormProps, UpdateAddressProps, UpdateServiceProviderDetailsProps } from "../types";
import { getToken } from '../utils/token';

export async function registerCustomer(input: CustomerSignUpFormProps) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/customer/register`;
    try {
        const response =  await axios.post( url, {
            emailOrPhone: input.emailOrPhone,
            firstName: input.firstName,
            lastName: input.lastName,
            password: input.password,
            provider: input.provider
        });
        return response.data;
    } catch (error) {
        return error
    }
}

export async function meQuery() {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/me`;

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${getToken("mr-token")}`
            }
        });
        return response.data;
    }
    catch (error) {
        return error
    }
}

export async function updateCustomerDetails(firstName: string, lastName: string, emailOrPhone: string) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/customers/update-details`;

    try {
        const response = await axios.patch(url, {
            firstName: firstName,
            lastName: lastName,
            emailOrPhone: emailOrPhone
        }, {
            headers: {
                Authorization: `Bearer ${getToken("mr-token")}`
            }
        });
        return response.data;
    }
    catch (error) {
        return error
    }
}

export async function getCustomer(id: string) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/customers/${id}`;

    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error) {
        return error
    }
}

export async function getProvider(id: string) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/service-providers/${id}`;

    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error) {
        return error
    }
}

export async function getAllServiceProviders() {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/service-providers/all`;

    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error) {
        return error
    }
}

export const createServiceProviderProfileHandler = async (data: FormProps) => {
    try {
        const token = getToken("mr-token")
        const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/service-providers/create-profile`
        const response = await axios.post(url, {
                    profession: data.profession,
                    bio: data.bio,
                    ratePerHour: Number(data.ratePerHour),
                    skills: data.skills
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
        )
        return response.data
    }
    catch(error) {
        return error
    }
}

export const getCities = async () => {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/cities`
    return await (await axios.get(url)).data
}

export const updateServiceProviderPersonalDetailsHandler = async (data: UpdateServiceProviderDetailsProps) => {
    try {
        const token = getToken("mr-token")
        const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/service-providers/update-personal-details`
        const response = await axios.patch(url, {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })

        return response.data
    }
    catch(error) {
        return error
    }
}

export const updateServiceProviderAddress = async (data: UpdateAddressProps) => {
	try {
		const token = getToken("mr-token")
		const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/service-providers/update-address`
		const response = await axios.patch(url, {
			city: data.city,
			streetAddress: data.streetAddress,
			suburb: data.suburb,
			province: data.province,
			postalCode: data.postalCode
		}, {
			headers: {
				Authorization: `Bearer ${token}`
			},
		})

		return response.data
	}
	catch(error) {
		return error
	}
}

export const sendVerificationCode = async (phoneNumber: string) => {
    try {
        const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/message-service/send-verification-code`
        const response = await axios.post(url, {
            phoneNumber: phoneNumber
        })

        return response.data
    } catch (error) {
        return error
    }
}

export const verifyOTP = async (phoneNumber: string, code: string) => {
    try {
        const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/message-service/verify-code`
        const response = await axios.post(url, {
            phoneNumber: phoneNumber,
            code: code
        })

        return response.data
    } catch (error) {
        return error
    }
}
