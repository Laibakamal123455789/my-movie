import HeroSection from "@/components/Hero-section/section";
import ActionMovies from "@/components/Action-movies/action";
import HorrorMovies from "@/components/horrorMovies/horrorMovies";

// Example genres
const actionGenre = { id: 28 }; // Action genre ID
const horrorGenre = { id: 27 }; // Horror genre ID

export default function MainPage() {
  return (
    <div>
      <HeroSection />
      <ActionMovies genre={actionGenre} />
      <HorrorMovies genre={horrorGenre} />
    </div>
  );
}
