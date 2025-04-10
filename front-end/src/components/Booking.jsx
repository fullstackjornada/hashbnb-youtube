import React from "react";
import { Link } from "react-router-dom";

const Booking = ({ booking, place = false }) => {
  return (
    <Link
      to={`/place/${booking.place._id}`}
      className={`flex items-center gap-6 rounded-2xl bg-gray-100 p-6 ${place ? "cursor-auto" : ""}`}
      key={booking.place._id}
    >
      {place ? (
        ""
      ) : (
        <img
          className="aspect-square max-w-56 rounded-2xl object-center"
          src={booking.place.photos[0]}
          alt="Foto da Acomodação"
        />
      )}

      <div className="flex flex-col gap-2">
        {place ? (
          <p className="text-2xl font-medium">
            Você já tem uma reserva para esse lugar!
          </p>
        ) : (
          <p className="text-2xl font-medium">{booking.place.title}</p>
        )}

        <div>
          <p>
            <span className="font-semibold">Checkin:</span>{" "}
            {new Date(booking.checkin + "GMT-03:00").toLocaleDateString(
              "pt-BR",
            )}
          </p>
          <p>
            <span className="font-semibold">Checkout:</span>{" "}
            {new Date(booking.checkout + "GMT-03:00").toLocaleDateString(
              "pt-BR",
            )}
          </p>
          <p>
            <span className="font-semibold">Noites:</span> {booking.nights}
          </p>
          <p>
            <span className="font-semibold">Convidados:</span> {booking.guests}
          </p>
          <p>
            <span className="font-semibold">Preço total:</span> R${" "}
            {booking.total.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Booking;
