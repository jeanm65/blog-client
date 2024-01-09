import { useEffect, useState } from "react";
import ArticleForm from "./article/ArticleForm";
import Articles from "./article/Articles";
import { IArticle, IArticleInput } from "../types/article.type";
import getArticles, { createArticle, deleteArticle, editArticle } from "../actions/articles.action";
import Notification from "../components/Notification";


const Home = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<IArticle | null>();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const init = async () => {
      try {
        const articles = await getArticles();
        setArticles(articles as IArticle[]);
      } catch (error) {
        setError(error as string);
      }
    }
    init();
  }, []);

  const handleDeleteArticle = async ( id: string ) => {
    try {
      const deletedArticle = await deleteArticle(id);
      const newArticles = articles.filter((article:  IArticle) => article._id !== (deletedArticle as IArticle)._id );
      setArticles(newArticles);
    } catch (error) {
      setError(error as string)
    }
  }

  const handleSelectedArticle = ( article: IArticle ) => {
     setSelectedArticle(article);
  }
  
  const handleSubmitArticle = async (values: IArticleInput) => {
    try {
      //----------EDITION--------------//
      if(selectedArticle){
      const updatedArticle = await editArticle(selectedArticle._id, values);
      //----------EMPTY FORM--------------//
      setSelectedArticle(null);
      //----------UPDATE ARTICLE LIST--------------//
      setArticles((prev: IArticle[]): IArticle[] => {
      return prev.map((article: IArticle) => {
        //----------Current updated article--------------//
        if(article._id === (updatedArticle as IArticle)._id){
          return updatedArticle as IArticle;
        }
        //----------non updated article--------------//
        return article;
      });
     });
     return;
   } 
      //----------CREATION--------------//
     const article = await createArticle(values);
      setArticles((prev: IArticle[]): IArticle[] => [article as IArticle, ...prev]); 
    } catch (error) {
      setError(error as string)
    }
  }

  

  return (
      <div css={{ minHeight: '100vh'}} className= 'flexColumn'>
        <h1>Home</h1>
        <ArticleForm  onSubmit={ handleSubmitArticle } article={ selectedArticle } />
        <Articles articles={articles as IArticle[]} onDelete={handleDeleteArticle} onEdit={ handleSelectedArticle }/>
        <Notification message={error} show={!!error} severity='error' />
      </div>    
  )
}

export default Home;