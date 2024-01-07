export interface IArticle {
  map(arg0: (article: IArticle, index: number) => import("@emotion/react/jsx-runtime").JSX.Element): import("react").ReactNode;
  _id: string;
  title: string;
  content: string;
  _v: number
} 

export interface IArticleInput extends Pick<IArticle, "title" | "content">{} 
export interface IArticleResponse {
  success: boolean;
  articles: IArticle[]
}