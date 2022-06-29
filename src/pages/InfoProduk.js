import Image from "react-bootstrap/esm/Image";
import icon_back from "../assets/images/fi_arrow-left.png";
import Navbar from "../pages/Navbar";
import uploadGambar from "../assets/images/Group 2.png";
import { useDropzone } from "react-dropzone";
import React, { useCallback, useState } from "react";

export default function InfoProduk() {
  const [selectedImages, setSelectedImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedImages(
      acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    );
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const seleted_images = selectedImages?.map((file) => (
    <div>
      <img src={file.preview} style={{ width: "8em", height: "8em" }} />
    </div>
  ));

  console.log("gambar : ", selectedImages);

  return (
    <>
      <Navbar />
      <div className="container mt-5" id="info-produk">
        <div className="row justify-content-center">
          <div className="col-lg-1 col-sm-12 mb-1">
            <Image src={icon_back} />
          </div>
          <div className="col-lg-11 col-sm-12">
            <form>
              <div className="row mb-3">
                <label className="form-label">Nama Produk</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama Produk"
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">Harga Produk</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rp 0,00"
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">Kategori</label>
                <select className="form-select">
                  <option value="" disabled selected>
                    Pilih Kategori
                  </option>
                  <option value="0">Hobi</option>
                  <option value="1">Kendaraan</option>
                  <option value="2">Baju</option>
                  <option value="3">Elektronik</option>
                  <option value="4">Kesehatan</option>
                </select>
              </div>
              <div className="row mb-3">
                <label className="form-label">Deskripsi</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ paddingBottom: "48px" }}
                  placeholder="Contoh: Jalan Ikan Hiu 33"
                />
              </div>
              <div className="row mb-3">
                <label className="form-label">Foto Produk</label>
                {selectedImages.length === 0 ? (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Image src={uploadGambar} style={{ width: "8em" }} />
                  </div>
                ) : (
                  <div>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <label className="border ms-3 mt-3">
                        {seleted_images}
                      </label>
                    </div>
                  </div>
                )}
              </div>
              <div className="row mb-3">
                <div className="col-6 p-0 pe-1">
                  <a href="seller/detail-produk/">
                    <button
                      className="btn btn-outline-primary btn-action "
                      type="button"
                      id="preview"
                    >
                      Preview
                    </button>
                  </a>
                </div>
                <div className="col-6 p-0 ps-1">
                  <a href="seller/daftar-jual">
                    <button
                      className="btn btn-primary btn-action"
                      type="button"
                      id="terbitkan"
                    >
                      Terbitkan
                    </button>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
