import styled from "styled-components";
import heartIcon from "@/assets/icon/heart.svg";
import Arrow from "@/assets/icon/Arrow.svg";

const Image = styled.img`
	width: 33px;
	height: 33px;
	border-radius: 50%;
`;

const CityNameContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100px;
`;

const RankingItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const CityName = styled.p`
	font-size: 11px;
	font-weight: bold;
`;

const CityEnglishName = styled.p`
	font-size: 8px;
	color: #d3d3d3;
`;

const Rank = styled.p`
	font-size: 13px;
	font-weight: bold;
	width: 20px;
`;

const LikeContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const Icon = styled.img`
	width: 7px;
	height: 7px;
	fill: #fff;
`;

const Likes = styled.p`
	font-size: 8px;
	color: #606060;
`;

export default function RankingItem({ src, rank, cityName, cityEnglishName, likes }) {
	return (
		<RankingItemContainer>
			<Image src={src} alt="thumbnail" />
			<Rank>{rank}</Rank>
			<CityNameContainer>
				<CityName>{cityName}</CityName>
				<CityEnglishName>{cityEnglishName}</CityEnglishName>
			</CityNameContainer>
			<LikeContainer>
				<Icon src={heartIcon} alt="heart" />
				<Likes>{likes}</Likes>
			</LikeContainer>
			<Icon src={Arrow} alt="arrow" />
		</RankingItemContainer>
	);
}