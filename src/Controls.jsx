const Controls = ({
  dogCount,
  setDogCount,
  fetchDogs,
  breed,
  setBreed,
  breedsList,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "16px",
        flexWrap: "wrap",
        marginBottom: "16px",
      }}
    >
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
        Показать:{" "}
        <input
          type="number"
          value={dogCount}
          min={1}
          max={50}
          onChange={(e) => setDogCount(+e.target.value)}
        />
      </label>

      <button
        style={{
          backgroundColor: "#0078d7",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "14px",
          cursor: "pointer",
        }}
        onClick={fetchDogs}
      >
        Обновить
      </button>
    </div>
  );
};

export default Controls;
