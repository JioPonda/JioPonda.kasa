import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Properties from "../data/logements.json";
import BGHome from "../assets/banner.jpg";

export default function Home() {
  document.title = "Kasa - Accueil";
  return (
    <main className="display_home">
      <Banner img={BGHome} text1={"Chez vous,"} text2={"partout et ailleurs"} />
      <div className="display_card">
        {Properties.map((logement) => (
          <Card key={logement.id} property={logement} />
        ))}
      </div>
    </main>
  );
}
