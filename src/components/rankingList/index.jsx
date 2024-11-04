import RankingElement from "@/components/rankingList/RankingElement";

const ranking = [
  {
    rank: 1,
    title: "부산광역시",
    viewCount: "2억 7천만회",
    thumbnail: "https://picsum.photos/201",
    likeCount: "12.3k",
  },
  {
    rank: 2,
    title: "부산광역시",
    viewCount: "2억 7천만회",
    thumbnail: "https://picsum.photos/201",
    likeCount: "12.3k",
  },
  {
    rank: 3,
    title: "부산광역시",
    viewCount: "2억 7천만회",
    thumbnail: "https://picsum.photos/201",
    likeCount: "12.3k",
  },
  {
    rank: 4,
    title: "부산광역시",
    viewCount: "2억 7천만회",
    thumbnail: "https://picsum.photos/201",
    likeCount: "12.3k",
  },
  {
    rank: 5,
    title: "부산광역시",
    viewCount: "2억 7천만회",
    thumbnail: "https://picsum.photos/201",
    likeCount: "12.3k",
  },
  {
    rank: 6,
    title: "부산광역시",
    viewCount: "2억 7천만회",
    thumbnail: "https://picsum.photos/201",
    likeCount: "12.3k",
  },
  {
    rank: 7,
    title: "부산광역시",
    viewCount: "2억 7천만회",
    thumbnail: "https://picsum.photos/201",
    likeCount: "12.3k",
  },
  {
    rank: 8,
    title: "부산광역시",
    viewCount: "2억 7천만회",
    thumbnail: "https://picsum.photos/201",
    likeCount: "12.3k",
  },
];

export default function RankingList() {
	return ranking.map((rank, index) => {
    return (
      <RankingElement
        key={index}
        rank={rank.rank}
        title={rank.title}
        viewCount={rank.viewCount}
        thumbnail={rank.thumbnail}
        likeCount={rank.likeCount}
      />
    );
  });
}