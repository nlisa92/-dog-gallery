const Controls = ({
  dogCount,
  setDogCount,
  fetchDogs,
  breed,
  setBreed,
  breedsList,
}) => {
  return (
    <div>
      <label>
        Порода:{" "}
        <select value={breed} onChange={(e) => setBreed(e.target.value)}>
          <option value="all">Все породы</option>
          {breedsList.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </label>

      <label>
        Кол-во собак (1–50):{" "}
        <input
          type="number"
          value={dogCount}
          min={1}
          max={50}
          onChange={(e) => setDogCount(+e.target.value)}
        />
      </label>

      <button onClick={fetchDogs}>Обновить</button>
    </div>
  );
};

export default Controls;
