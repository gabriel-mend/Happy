import React, { ChangeEvent, FormEvent, useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";

import { FiPlus, FiX } from "react-icons/fi";
import * as Styles from "./styles";

import Sidebar from "../../components/Sidebar";
import mapIcon from "../../utils/mapIcon";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

export default function CreateOrphanage() {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [instructions, setInstructions] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [opening_hours, setOpeningHours] = useState("");
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append("name", name);
    data.append("about", about);
    data.append("about", about);
    data.append("instructions", instructions);
    data.append("whatsapp", whatsapp);
    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));
    data.append("opening_hours", opening_hours);
    data.append("open_on_weekends", String(open_on_weekends));

    images.forEach((image) => {
      data.append("images", image);
    });

    await api.post("orphanages", data);

    alert("Cadastro realizado com sucesso");

    history.push("/app");
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    if (images.length !== 0) {
      setImages([...images, ...selectedImages]);
    } else setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    if(previewImages.length !== 0) {
      setPreviewImages([...previewImages, ...selectedImagesPreview]);
    } else setPreviewImages(selectedImagesPreview);
  }

  function handleDeleteImage(index: number) {
    if (previewImages.length === 1) {
      setPreviewImages([]);
      setImages([]);
    } else {
      images.splice(index, 1);
      previewImages.splice(index, 1);

      setPreviewImages([ ...previewImages ]);
      setImages([ ...images ]);
    }
  }

  return (
    <Styles.Container>
      <Sidebar />

      <main>
        <Styles.CreateOrphanageForm onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-2.5606303, -44.3281626]}
              style={{ width: "100%", height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <Styles.InputBlock>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Styles.InputBlock>

            <Styles.InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={(event) => setAbout(event.target.value)}
              />
            </Styles.InputBlock>

            <Styles.InputBlock>
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                id="whatsapp"
                value={whatsapp}
                onChange={(event) => setWhatsapp(event.target.value)}
                placeholder="(99)99999-9999"
                maxLength={11}
              />
            </Styles.InputBlock>

            <Styles.InputBlock>
              <label htmlFor="images">
                Fotos <span>Selecione no máximo 5 imagens</span>
              </label>

              <Styles.ImagesContainer>
                {previewImages.map((image, index) => {
                  return (
                    <Styles.ImageContainer key={image}>
                      <FiX
                        size={24}
                        color="#FF669D"
                        onClick={() => handleDeleteImage(index)}
                      />
                      <img src={image} alt={name} />
                    </Styles.ImageContainer>
                  );
                })}
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </Styles.ImagesContainer>

              <input
                type="file"
                multiple
                onChange={handleSelectImages}
                id="image[]"
              />
            </Styles.InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <Styles.InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
              />
            </Styles.InputBlock>

            <Styles.InputBlock>
              <label htmlFor="opening_hours">Horário de visitas</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={(event) => setOpeningHours(event.target.value)}
              />
            </Styles.InputBlock>

            <Styles.InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <Styles.ButtonSelect>
                <button
                  type="button"
                  className={open_on_weekends ? "active" : ""}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? "active" : ""}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </Styles.ButtonSelect>
            </Styles.InputBlock>
          </fieldset>

          <Styles.ConfirmButton type="submit">Confirmar</Styles.ConfirmButton>
        </Styles.CreateOrphanageForm>
      </main>
    </Styles.Container>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
