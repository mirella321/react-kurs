import logo from "./logo.svg";
import "./App.css";
import {News} from "./components/news/news"
function App() 
{
  const name = "Mirella";

   const newsList = [
    {
      title: "Spotkanie w Monachium",
      description:
        "Odbyło się spotkanie światowych liderów w Monachium dotyczące bezpieczeństwa i współpracy międzynarodowej.",
    },
    {
    id: 1,
    title: "Rewolucja w AI: Nowy model od OpenAI zmienia rynek",
    description:
      "Najnowszy model sztucznej inteligencji wprowadza przełomowe rozwiązania w analizie danych i automatyzacji procesów biznesowych."
  },
  {
    id: 2,
    title: "React 19 już dostępny sprawdź nowe funkcje",
    description:
      "Nowa wersja Reacta oferuje lepszą wydajność, usprawnione zarządzanie stanem oraz uproszczoną konfigurację projektów."
  },
  {
    id: 3,
    title: "Start-up z Polski podbija Dolinę Krzemową",
    description:
      "Młoda firma technologiczna zdobyła rekordowe finansowanie i planuje ekspansję na rynek amerykański."
  },
  {
    id: 4,
    title: "Cyberbezpieczeństwo w 2026: Na co uważać?",
    description:
      "Eksperci ostrzegają przed rosnącą liczbą ataków phishingowych i wskazują kluczowe metody ochrony danych."
  },
  {
    id: 5,
    title: "Nowy smartfon z elastycznym ekranem zachwyca użytkowników",
    description:
      "Producent zaprezentował innowacyjny model z giętkim wyświetlaczem i wydłużonym czasem pracy baterii."
  }
  ];
      return (
    <>
      <h1 className="animated-title">HELLO {name}!</h1>

      <main>
        {newsList.map((news) => (
          <News title={news.title} description={news.description}></News>
        ))}
      </main>
    </>
  );
}

export default App;