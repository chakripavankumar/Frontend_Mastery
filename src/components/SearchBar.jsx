import { useEffect, useState } from "react";

const SearchBar = () => {
  const [input, setinput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      console.log("cached return", input);
      setResults(cache[input]);
      return;
    }
    console.log("api call", input);
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setResults(json?.recipes);
    setCache((prev) => ({ ...prev, [input]: json?.recipes }));
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 350);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);
  return (
    <div className="flex  flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center">
        {" "}
        Auto Complete Search Bar{" "}
      </h1>
      <input
        type="text"
        className="w-[300px] p-3  border border-solid mt-5 rounded-xl"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />
      {showResults && (
        <div className="w-[300px] max-h-[300px] overflow-y-auto border border-gray-300 p-2 m-1 text-left rounded-xl shadow">
          {results.map((r) => (
            <span
              className="block p-2 hover:bg-amber-50 cursor-pointer"
              key={r.id}
            >
              {r.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
