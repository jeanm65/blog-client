import LinearProgress from '@mui/material/LinearProgress';
import ArticleForm from "./ArticleForm";
import { createArticle } from "../../actions/articles.action";
import { useState } from 'react';
import { IArticleInput } from '../../types/article.type';
import Notification from '../../components/Notification';
import { useNavigate } from 'react-router-dom';


const CreateArticle = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  
  const navigate = useNavigate() 

  const handleSubmitArticle = async (values: IArticleInput) => {
    setLoading(true);
    try { 
      //----------CREATION--------------//
     await createArticle(values);
     navigate("/articles");
     setLoading(false);
    } catch (error) {
      setError(error as string);
      setLoading(false); 
    }
  }

  return (
      <div css={{ minHeight: '100vh', position: 'relative'}} className= 'flexColumn'>
       { loading && <LinearProgress css={{ height: 4, position: 'absolute', top: 0, left: 0, right: 0}} className="stretchSelf" /> }
        <h1>Create article</h1>
        <ArticleForm  onSubmit={ handleSubmitArticle } loading={loading} />
        <Notification message={error} show={!!error} severity='error' />
      </div>    
  )
}

export default CreateArticle;