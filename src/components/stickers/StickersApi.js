import { useHttp } from "../hooks/http.hook";

const useStickersApi = () => {
  const { loading, request, error, clearError } = useHttp();
  const _apiBase = "https://stickershop20240313123631.azurewebsites.net/api";

  const getAllStickers = async (parameters = "") => {
    clearError();
    const res = await request(
      `${_apiBase}/Stickers/${
        parameters?.length > 1 ? parameters.join("/") : parameters
      }`
    );
    if (res) return res.map((sticker) => transformSticker(sticker));
  };

  const getStickerById = async (id) => {
    clearError();
    const res = await request(`${_apiBase}/Stickers/${id}`);
    return transformSticker(res);
  };

  const transformSticker = (sticker) => {
    return {
      id: sticker.stickerId,
      name: sticker.stickerName,
      size: `${sticker.stickerSizeWidth} cm x ${sticker.stickerSizeHeight} cm`,
      price: sticker.stickerPrice,
      thumbnail: sticker.stickerThumbnail,
      categories: sticker.stickerCategories,
      colors: sticker.stickerColors,
      materials: sticker.stickerMaterials,
      description: sticker.stickerDescription,
      inStock: sticker.stickerInStock,
      isNew: sticker.stickerNew,
      discount: sticker.stickerDiscount,
    };
  };

  return { loading, error, getAllStickers, getStickerById };
};

export default useStickersApi;
