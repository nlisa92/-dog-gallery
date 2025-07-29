import { useState, useEffect, useCallback } from "react";
import DogGallery from "./DogGallery";
import Controls from "./Controls";
import Loader from "./Loader";

const App = () => {
  const [dogCount, setDogCount] = useState(3);
  const [dogImages, setDogImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updateCount, setUpdateCount] = useState(0);
  const [breed, setBreed] = useState("all");
  const [breedsList, setBreedsList] = useState([]);

  const fetchDogs = useCallback(
    async (count, isUserTriggered = false) => {
      setIsLoading(true);
      try {
        const breedPath =
          breed === "all"
            ? `https://dog.ceo/api/breeds/image/random/${count}`
            : `https://dog.ceo/api/breed/${breed}/images/random/${count}`;

        const res = await fetch(breedPath);
        const data = await res.json();
        setDogImages(data.message);
        if (isUserTriggered) {
          setUpdateCount((prev) => prev + 1);
        }
      } catch (err) {
        console.error("Ошибка загрузки собак:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [breed]
  );

  useEffect(() => {
    fetchDogs(dogCount, false);
  }, [breed, fetchDogs]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await res.json();
        setBreedsList(Object.keys(data.message));
      } catch (err) {
        console.error("Ошибка загрузки списка пород:", err);
      }
    };
    fetchBreeds();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        padding: "40px",
        fontSize: "14px",
      }}
    >
      <h2
        style={{
          margin: "0",
        }}
      >
        Галерея собак
      </h2>
      <p>Картинки обновлены {updateCount} раз(а)</p>
      <Controls
        dogCount={dogCount}
        setDogCount={setDogCount}
        fetchDogs={() => fetchDogs(dogCount, true)}
        breed={breed}
        setBreed={setBreed}
        breedsList={breedsList}
      />
      {isLoading ? <Loader /> : <DogGallery images={dogImages} />}
    </div>
  );
};

export default App;
