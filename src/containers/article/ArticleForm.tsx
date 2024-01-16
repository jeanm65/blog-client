import { IArticle, IArticleInput } from "../../types/article.type";
import TextField from "../../components/form/fields/TextField";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import Form from "../../components/form/Form";

type Props = {
  onSubmit : (value: IArticleInput) => void;
  article?: IArticle | null; 
  loading?: boolean
} 

const initialValues = {
  title: "",
  content: ""
}

const ArticleForm = ( { article, onSubmit, loading }: Props) => {
  const form  = useForm<IArticleInput>({
    defaultValues: initialValues 
  });

  const { handleSubmit, reset }= form;

  useEffect(() => {
    if(!article) return;
    reset({
      title: article.title,
      content: article.content
    })
  }, [article, reset]); 

  const _onSubmit: SubmitHandler<IArticleInput> = (values) => {
    onSubmit(values);
    reset(initialValues);
  }
  return (
    <Form form={ form } onSubmit={handleSubmit(_onSubmit)} loading={ loading }>
          <TextField
            label="title" 
            name="title"
          /> 
          <TextField
            label="content"
            name="content"
            multiline
            maxRows={4}
          />
    </Form>  
  );
};

export default ArticleForm;