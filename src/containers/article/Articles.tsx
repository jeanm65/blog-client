import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import Notification from '../../components/Notification';
import getArticles from '../../actions/articles.action';
import { IArticle } from '../../types/article.type';


 const Articles = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
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
  }, [])
  return (
  <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((article: IArticle) => (
            <TableRow key={article._id}>
              <TableCell component="th" scope="row">
                {article._id}
              </TableCell>
              <TableCell align="right">{article.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    <Notification message={error} show={!!error} severity='error' />
  </>
  );
}

export default Articles;