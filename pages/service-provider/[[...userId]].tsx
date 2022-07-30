import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ProfileDisplay } from '../../components/ProfileDisplay';
import { getProvider } from '../../src/api-calls'

export async function getServerSideProps(context: any) {
    const userId = context.params.userId

    const data = await getProvider(userId);

    if (data.response?.data?.success === false) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            userId: data?.data?.id,            
            data
        }
    }
}

type ProfileProps = {
    userId: string;
    data: any;
}

const ProviderProfile = ({userId, data}: ProfileProps) => {
   
    return (
        <>           
            <ProfileDisplay data={data} />
        </>
    )
}


export default ProviderProfile