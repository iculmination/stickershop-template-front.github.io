import { useHttp } from "../hooks/http.hook";

const useStickersApi = () => {
  const { loading, request, error, clearError } = useHttp();
  const _apiBase = "https://stickershop20240313123631.azurewebsites.net/api";

  const getStickersByCategory = () => {};

  const getAllStickers = async () => {
    const res = await request(`${_apiBase}/Stickers`);
    return res.map((sticker) => transformSticker(sticker));
  };

  const getStickerById = async (id) => {
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
