import BrowseCategories from "./components/BrowseCategories";
import DiscoverMoreNFTs from "./components/DiscoverMoreNFTs";
import DiscoverPage from "./components/DiscoverPage";
import HowItWorks from "./components/HowItWorks";
import JoinOurWeeklyDigest from "./components/JoinOurWeeklyDigest";
import MagicMashrooms from "./components/MagicMashrooms";
import TopCreators from "./components/TopCreators";
import TrendingCollection from "./components/TrendingCollection";

export default function Home() {
  return (
    <div>
      <DiscoverPage />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategories />
      <DiscoverMoreNFTs />
      <MagicMashrooms />
      <HowItWorks />
      <JoinOurWeeklyDigest />
    </div>
  );
}
