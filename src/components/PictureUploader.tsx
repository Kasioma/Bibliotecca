"use client";
import { ChangeEventHandler, useEffect, useState } from "react";

export default function PictureUploader() {
  const [file, setFile] = useState<File>();
  const [filename, setFilename] = useState<string>();

  useEffect(
    () => () => {
      if (filename) URL.revokeObjectURL(filename);
    },
    [filename]
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (!target.files) return;

    if (filename) URL.revokeObjectURL(filename);

    const file = target.files[0];
    setFilename(URL.createObjectURL(file as Blob));
    setFile(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/filestorage/picture/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row gap-20">
      <form
        onSubmit={handleSubmit}
        className="items-left flex w-[500px] max-w-full flex-col gap-3 rounded-2xl border p-4"
      >
        <input
          id="avatar"
          type="file"
          onChange={handleChange}
          className="border-border"
        />
        <button>Upload Picture</button>
      </form>
    </div>
  );
}
