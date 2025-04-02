import axios from "axios";
import React from "react";

const PhotoUploader = ({ photolink, setPhotoLink, setPhotos, photos }) => {
  const uploadByLink = async (e) => {
    e.preventDefault();

    if (photolink) {
      try {
        const { data: filename } = await axios.post("/places/upload/link", {
          link: photolink,
        });

        setPhotos((prevValue) => [...prevValue, filename]);
      } catch (error) {
        alert("Deu erro na hora do upload por link", JSON.stringify(error));
      }
    } else {
      alert("Não existe nenhum link a ser enviado!");
    }
  };

  const uploadPhoto = async (e) => {
    const { files } = e.target;
    const filesArray = [...files];

    const formData = new FormData();

    filesArray.forEach((file) => formData.append("files", file));

    try {
      const { data: urlArray } = await axios.post("/places/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(urlArray);
      setPhotos((prevValue) => [...prevValue, ...urlArray]);
    } catch (error) {
      alert("Deu erro na hora do upload", JSON.stringify(error));
    }
  };

  const deletePhoto = (fileURL) => {
    const newPhotos = photos.filter((photo) => photo !== fileURL);

    setPhotos(newPhotos);
  };

  const promotePhoto = (fileURL) => {
    const newPhotos = [fileURL, ...photos.filter((photo) => photo !== fileURL)];

    setPhotos(newPhotos);
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="photos" className="ml-2 text-2xl font-bold">
        Fotos
      </label>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Adicione uma foto pelo link dela"
          className="grow rounded-full border border-gray-300 px-4 py-2"
          id="photolink"
          value={photolink}
          onChange={(e) => setPhotoLink(e.target.value)}
        />
        <button
          onClick={uploadByLink}
          className="cursor-pointer rounded-full border border-gray-300 bg-gray-100 px-4 py-2 transition hover:bg-gray-200"
        >
          Enviar foto
        </button>
      </div>

      <div className="mt-2 grid grid-cols-5 gap-4">
        {photos.map((photo) => (
          <div className="relative">
            <img
              className="aspect-square rounded-2xl object-cover"
              src={`${photo}`}
              alt="Imagens do Lugar"
              key={photo}
            />

            <div className="absolute right-2 bottom-2 flex gap-1">
              <div
                onClick={() => promotePhoto(photo)}
                className="hover:bg-primary-400 cursor-pointer rounded-full bg-gray-100 p-2 opacity-75 transition hover:text-white"
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
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </div>

              <div
                onClick={() => deletePhoto(photo)}
                className="hover:bg-primary-400 cursor-pointer rounded-full bg-gray-100 p-2 opacity-75 transition hover:text-white"
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}

        <label
          htmlFor="file"
          className="flex aspect-square cursor-pointer items-center justify-center gap-2 rounded-2xl border border-gray-300"
        >
          <input
            type="file"
            id="file"
            className="hidden"
            multiple
            onChange={uploadPhoto}
          />
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
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
          Upload
        </label>
      </div>
    </div>
  );
};

export default PhotoUploader;
