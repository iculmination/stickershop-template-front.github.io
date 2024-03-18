import { useHttp } from "../hooks/http.hook";

const useStickersApi = () => {
  const { loading, request, error, clearError } = useHttp();
  const _apiBase = "https://stickershop20240313123631.azurewebsites.net/api";

  const getAllStickers = async (filters) => {
    clearError();

    const defaultParams = {
      isNew: undefined,
      discount: undefined,
      category: undefined,
      color: undefined,
      page: 1,
      size: 12,
    };

    const params = { ...defaultParams, ...filters };
    if (filters.category === "All") params.category = undefined;
    if (filters.color === "Any") params.color = undefined;
    const queryString = Object.entries(params)
      .filter(([key, value]) => value !== undefined)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
    console.log(queryString);
    const res = await request(`${_apiBase}/Stickers/filter?${queryString}`);

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
