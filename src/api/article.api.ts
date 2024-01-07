import http from "../config/http"
import { IArticleResponse } from "../types/Article.type";

export const getArticleApi = async (): Promise<IArticleResponse> => {
   const response = await http.get<IArticleResponse>('articles');
   return response.data;
}