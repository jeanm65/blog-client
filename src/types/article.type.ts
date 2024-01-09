export interface IArticle {
  map(arg0: (article: IArticle, index: number) => import("@emotion/react/jsx-runtime").JSX.Element): import("react").ReactNode;
  _id: string;
  title: string;
  content: string;
  __v: number;
} 

export interface IArticleInput extends Pick<IArticle, "title" | "content">{} 
export interface IArticlesResponse {
  success: boolean;
  articles: IArticle[];
}

export interface IArticleResponse {
  success: boolean;
  article: IArticle;
}