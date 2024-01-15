import { IArticle, IArticleInput } from "../../types/article.type";
import { Controller, SubmitHandler, useForm  } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import { useEffect } from "react";

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
  const { control, handleSubmit, reset } = useForm<IArticleInput>({
    defaultValues: initialValues 
  });

  useEffect(() => {
    if(!article) return;
    reset({
      title: article.title,
      content: article.content
    })
  }, [article, reset]);

  const _onSubmit: SubmitHandler<IArticleInput> = (values) => {
    onSubmit(values);
  }
  return (
      <form onSubmit={handleSubmit(_onSubmit)}>
        <Stack spacing={2}>
            <Controller
              name="title"
              control ={control}
              render = {({ field }) => (
              <TextField 
                label="title" 
                variant="outlined" 
                { ...field } 
              /> 
           )}
         />
              <Controller
                    name="content"
                    control ={control}
                    render={({ field }) => (
                    <TextField
                        label="content"
                        multiline
                        maxRows={4}
                        variant="outlined"
                        { ... field }
                    />
            )}
                 />  
        <Button type="submit" variant="contained">
          { loading ? "...loading" : "Save"}
        </Button>
        </Stack>
      </form>
  );
};

export default ArticleForm;