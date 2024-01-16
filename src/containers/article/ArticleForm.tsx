import { IArticle, IArticleInput } from "../../types/article.type";
import TextField from "../../components/form/textfield/TextField";
import { SubmitHandler, useForm, FormProvider  } from "react-hook-form";
import { Button, Stack } from "@mui/material";
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
    <FormProvider { ...form }>
        <form onSubmit={handleSubmit(_onSubmit)}>
          <Stack spacing={2}>
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
                     
          <Button type="submit" variant="contained">
            { loading ? "...loading" : "Save"}
          </Button>
          </Stack>
      </form>
    </FormProvider>
      
  );
};

export default ArticleForm;