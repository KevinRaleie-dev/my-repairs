import axios from "axios";
import type { CustomerSignUpFormProps } from "../types";

export async function registerCustomer(input: CustomerSignUpFormProps) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/customer/register`;
    try {
        const response =  await axios.post( url, {
            emailOrPhone: input.emailOrPhone,
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
                Authorization: `Bearer ${localStorage.getItem('mr-token')}`
            }
        });
        return response.data;
    }
    catch (error) {
        return error
    }
}