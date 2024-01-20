import { Button, Fab, IconButton } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IArticle } from '../../types/article.type';
import { useEffect, useState } from 'react';
import getArticles, { deleteArticle } from '../../actions/articles.action';
import Notification from '../../components/Notification';
import { useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { CiEdit } from 'react-icons/ci';
import { MdOutlineDelete } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';

  const Articles = () => {
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()
    
  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        const articles = await getArticles();
        setArticles(articles as IArticle[]);
        setLoading(false);
      } catch (error) {
        setError(error as string);
      }
    }
    init();
  }, [setArticles]);

  const handleDeleteArticle = async ( id: string ) => {
    try {
      setLoading(true);
      const deletedArticle = await deleteArticle(id);
      const newArticles = articles.filter((article:  IArticle) => article._id !== (deletedArticle as IArticle)._id );
      setArticles(newArticles);
      setLoading(false);
    } catch (error) {
      setError(error as string)
    }
  }

  const handleEdit = (id: string) => {
    navigate("/articles/edit/" + id);
  }
  const handleAddArticle = () => {
    navigate("/articles/create/");
  }
  const handlePreview = (id: string) => {
    navigate("/articles/" + id);
  }

  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((article: IArticle, index: number) => (
            <TableRow key={ article._id + index }
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                { article._id }
              </TableCell>
              <TableCell align="right">{article.title}</TableCell>
              <TableCell align="right">
              <IconButton color="error" onClick={() => handlePreview(article._id)}>
                 <FaRegEye />
              </IconButton>
                <IconButton color="error" onClick={() => handleEdit(article._id)}>
                  <CiEdit />
              </IconButton>
              <IconButton color="info" onClick={() => handleDeleteArticle(article._id)}>
                  <MdOutlineDelete />
              </IconButton>
              </TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
      </TableContainer>
    <Notification message={error} show={!!error} severity='error' />
    <Fab color="primary" aria-label="add" onClick={handleAddArticle}>
      <FiPlus />
    </Fab>
    </div>  
  );
}

export default Articles;