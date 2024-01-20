import LinearProgress from '@mui/material/LinearProgress';
import { getArticle } from "../../actions/articles.action";
import { useEffect, useState } from 'react';
import { IArticle } from '../../types/article.type';
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, Typography } from '@mui/material';

const Article = () => {
  const [article, setArticle] = useState<IArticle | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(!id) return;
    const init = async () => {
      try {
        setLoading(true);
        const article = await getArticle(id);
        setArticle(article as IArticle);
        setLoading(false);
      } catch (error) {
        setError(error as string);
      }
    }
    init();
  }, [id]);

  // const handleSubmitArticle = async (values: IArticleInput) => {
  //   if(!id) return;
  //   setLoading(true);
  //   try { 
  //     //----------edition--------------//
  //    await editArticle(id, values);
  //    navigate("/articles/");
  //    setLoading(false);
  //   } catch (error) {
  //     setError(error as string);
  //     setLoading(false); 
  //   }
  // } 

  return (
    <div css={{ minHeight: '100vh', position: 'relative'}} className= 'flexColum'>
       { loading && <LinearProgress css={{ height: 4, position: 'absolute', top: 0, left: 0, right: 0}} className="stretchSelf" /> }
        <h1>{article?.title}</h1>
      <Card>
        <CardContent>
          <Typography>Title: { article?.title} </Typography>
          <Typography>Content: { article?.content} </Typography>
        </CardContent>
      </Card>
    </div>    
  )
}

export default Article;