import { Center } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { ProfileDisplay } from "../components/ProfileDisplay";
import { meQuery } from "../src/api-calls";

const Profile = () => {
	const {data, isLoading} = useQuery('me-query', meQuery) // depending on the query, im going to pass in that data

	if (isLoading) {
		return <Center>Loading...</Center>
	}

	return (
		<ProfileDisplay data={data} />
	)

}

export default Profile;
