import { IconButton } from "@chakra-ui/react";

type SocialLinkProps = {
	socialLink: string;
	socialIcon: React.ReactElement;
}

export const SocialLinks = ({ socialLink, socialIcon }: SocialLinkProps) => {
	return (
		<>
			<a href={`https://${socialLink}`}>
				<IconButton
				aria-label="social network link button"
				icon={socialIcon}
				 />
			</a>
		</>
	)
}