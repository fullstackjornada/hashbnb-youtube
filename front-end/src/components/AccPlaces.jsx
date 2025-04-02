import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import NewPlace from "./NewPlace";
import axios from "axios";

const AccPlaces = () => {
  const { action } = useParams();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const axiosGet = async () => {
      const { data } = await axios.get("/places/owner");
      setPlaces(data);
    };

    axiosGet();
  }, [action]);

  return (
    <div className="flex w-full max-w-7xl flex-col items-center">
      {action !== "new" ? (
        <div className="flex flex-col items-center gap-8">
          <Link
            to="/account/places/new"
            className="hover:bg-primary-500 bg-primary-400 flex min-w-44 cursor-pointer gap-2 rounded-full px-4 py-2 text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Adicionar novo lugar
          </Link>

          {places.map((place) => (
            <Link
              to={`/account/places/new/${place._id}`}
              className="flex items-center gap-6 rounded-2xl bg-gray-100 p-6"
              key={place._id}
            >
              <img
                className="aspect-square max-w-56 rounded-2xl object-center"
                src={place.photos[0]}
                alt="Foto da Acomodação"
              />

              <div className="flex flex-col gap-2">
                <p className="text-2xl font-medium">{place.title}</p>
                <p>{place.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <NewPlace />
      )}
    </div>
  );
};

export default AccPlaces;
