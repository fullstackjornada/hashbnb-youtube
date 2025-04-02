import React from "react";
import Perk from "./Perk";

const Perks = ({ perks, setPerks }) => {
  const handleClick = (target) => {
    const newPerks = target.checked
      ? [...perks, target.value]
      : [...perks].filter((perk) => perk !== target.value);

    setPerks(newPerks);
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
      <label
        htmlFor="wifi"
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          id="wifi"
          value={"wifi"}
          checked={perks.includes("wifi")}
          onChange={(e) => handleClick(e.target)}
        />

        <Perk perk={"wifi"}></Perk>
      </label>

      <label
        htmlFor="parking"
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          id="parking"
          value={"parking"}
          checked={perks.includes("parking")}
          onChange={(e) => handleClick(e.target)}
        />

        <Perk perk={"parking"}></Perk>
      </label>

      <label
        htmlFor="tv"
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          id="tv"
          value={"tv"}
          checked={perks.includes("tv")}
          onChange={(e) => handleClick(e.target)}
        />

        <Perk perk={"tv"}></Perk>
      </label>

      <label
        htmlFor="radio"
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          id="radio"
          value={"radio"}
          checked={perks.includes("radio")}
          onChange={(e) => handleClick(e.target)}
        />

        <Perk perk={"radio"}></Perk>
      </label>

      <label
        htmlFor="pets"
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          id="pets"
          value={"pets"}
          checked={perks.includes("pets")}
          onChange={(e) => handleClick(e.target)}
        />
        <Perk perk={"pets"}></Perk>
      </label>

      <label
        htmlFor="entrance"
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          id="entrance"
          value={"entrance"}
          checked={perks.includes("entrance")}
          onChange={(e) => handleClick(e.target)}
        />
        <Perk perk={"entrance"}></Perk>
      </label>
    </div>
  );
};

export default Perks;
