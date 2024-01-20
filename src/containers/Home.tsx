
const Home = () => {
  // const [error, setError] = useState<string>('');
  // const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       setLoading(true);
  //       const articles = await getArticles();
  //       setArticles(articles as IArticle[]);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error as string);
  //     }
  //   }
  //   init();
  // }, []);

  // const handleDeleteArticle = async ( id: string ) => {
  //   try {
  //     setLoading(true);
  //     const deletedArticle = await deleteArticle(id);
  //     const newArticles = articles.filter((article:  IArticle) => article._id !== (deletedArticle as IArticle)._id );
  //     setArticles(newArticles);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error as string)
  //   }
  // }
  
  // const handleSubmitArticle = async (values: IArticleInput) => {
  //   setLoading(true);
  //   try {
  //     //----------EDITION--------------//
  //     if(selectedArticle){
  //     const updatedArticle = await editArticle(selectedArticle._id, values);
  //     //----------EMPTY FORM--------------//
  //     setSelectedArticle(null);
  //     //----------UPDATE ARTICLE LIST--------------//
  //     setArticles((prev: IArticle[]): IArticle[] => {
  //     return prev.map((article: IArticle) => {
  //       //----------Current updated article--------------//
  //       if(article._id === (updatedArticle as IArticle)._id){
  //         return updatedArticle as IArticle;
  //       }
  //       //----------non updated article--------------//
  //       return article;
  //     });
  //    });
  //    setLoading(false);
  //    return;
  //  } 
  //     //----------CREATION--------------//
  //    const article = await createArticle(values);
  //     setArticles((prev: IArticle[]): IArticle[] => [article as IArticle, ...prev]); 
  //   } catch (error) {
  //     setError(error as string);
  //   }
  //   setLoading(false); 
  // }

  

  return (
      <div css={{ minHeight: '100vh', position: 'relative'}} className= 'flexColumn'>
        <div>Home</div>
      </div>    
  )
}

export default Home;