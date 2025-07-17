import { useEffect, useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  // Fetch data (with cache check)
  const fetchData = async () => {
    if (cache[input]) {
      console.log("cached return", input);
      setResults(cache[input]);
      return;
    }

    console.log("api call", input);
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const json = await res.json();

    setResults(json?.recipes || []);
    setCache((prev) => ({
      ...prev,
      [input]: json?.recipes || [],
    }));
  };

  // Debounce API calls
  useEffect(() => {
    const timer = setTimeout(fetchData, 350);

    return () => clearTimeout(timer); // Cleanup to prevent stale calls
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h1 className="text-2xl font-bold mb-4">Autocomplete Search Bar</h1>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search recipe..."
        className="w-[300px] p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowResults(true)}
        onBlur={() => setTimeout(() => setShowResults(false), 200)} // Delay hiding to allow click
      />

      {/* Dropdown Suggestions */}
      {showResults && results.length > 0 && (
        <div className="w-[300px] max-h-[300px] overflow-y-auto border border-gray-300 mt-2 rounded-xl shadow bg-white">
          {results.map((r) => (
            <span
              key={r.id}
              className="block px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm transition"
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